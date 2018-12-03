var TemplateLoader = (function () {

    // Object used as dictionary
    let templates = {};

    const path = "templates/";
    const extension = ".hb.html";

    let fetchFile= function (file_path) {
        return fetch(file_path)
            .then(response => response.text());
    };

    return {

        getTemplate: function (name, callback) {

            if (name in templates) {
                callback(templates[name])
            } else {
                let file_path = path + name + extension;
                fetchFile(file_path).then( template_text => {
                    console.log("Loading template '" + name + "' for the first time");
                    let template = Handlebars.compile(template_text);
                    templates[name] = template;
                    callback(template)
                });
            }
        },
    }
})();