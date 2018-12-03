Handlebars.registerHelper({
  eq: function (v1, v2) {
      return v1 === v2;
  },
  ne: function (v1, v2) {
      return v1 !== v2;
  },
  lt: function (v1, v2) {
      return v1 < v2;
  },
  gt: function (v1, v2) {
      return v1 > v2;
  },
  lte: function (v1, v2) {
      return v1 <= v2;
  },
  gte: function (v1, v2) {
      return v1 >= v2;
  },
  and: function () {
      return Array.prototype.slice.call(arguments).every(Boolean);
  },
  or: function () {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  }
});

document.addEventListener("DOMContentLoaded", function() {
 
  // //Affiche le panneau de réponse au moment où l'on clique sur une proposition
  // document.getElementById('answer--btn').addEventListener('click', function(){
  //   document.getElementById('answer--wrapper').classList.toggle('close');
  // });

  // document.getElementById('answer--wrapper').addEventListener('click', function(){
  //   document.getElementById('answer--wrapper').classList.toggle('close');
  // });

  var lastElementClicked;
  var PrevLink = document.querySelector('a.prev');
  var NextLink = document.querySelector('a.next');

  QuizzLoader.init();

  Barba.Pjax.init();
  Barba.Prefetch.init();

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    QuizzLoader.updateLinks(container);
    QuizzLoader.loadCurrent(container);
  });

  var MovePage = Barba.BaseTransition.extend({
    start: function() {
      this.originalThumb = lastElementClicked;

      Promise
        .all([this.newContainerLoading, this.scrollTop()])
        .then(this.movePages.bind(this));
    },

    scrollTop: function() {
      var deferred = Barba.Utils.deferred();
      var obj = { y: window.pageYOffset };

      TweenLite.to(obj, 0.4, {
        y: 0,
        onUpdate: function() {
          if (obj.y === 0) {
            deferred.resolve();
          }

          window.scroll(0, obj.y);
        },
        onComplete: function() {
          deferred.resolve();
        }
      });

      return deferred.promise;
    },

    movePages: function() {
      var _this = this;
      var goingForward = true;
      this.updateLinks();

      if (this.getNewPageFile() === this.oldContainer.dataset.prev) {
        goingForward = false;
      }

      TweenLite.set(this.newContainer, {
        visibility: 'visible',
        xPercent: goingForward ? 100 : -100,
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0
      });

      TweenLite.to(this.oldContainer, 0.6, { xPercent: goingForward ? -100 : 100 });
      TweenLite.to(this.newContainer, 0.6, { xPercent: 0, onComplete: function() {
        TweenLite.set(_this.newContainer, { clearProps: 'all' });
        _this.done();
      }});
    },

    updateLinks: function() {
      PrevLink.href = this.newContainer.dataset.prev;
      NextLink.href = this.newContainer.dataset.next;
    },

    getNewPageFile: function() {
      return Barba.HistoryManager.currentStatus().url.split('/').pop();
    }
  });

  var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function () {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function () {
        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility: 'visible',
            opacity: 0,
        });

        $el.animate({ opacity: 1 }, 1000, function () {
            _this.done();
        });
    },
  });

  Barba.Pjax.getTransition = function() {
    return QuizzLoader.isSwitchingQuestion() ? MovePage : FadeTransition;
  };
});