export function Services() {

    function openServer(port) {
        console.log('here I should open an httpserver on port ' + port)
        return this;
    }

    function run(services) {
        execute(services);
        return this;
    }

    return {
        run: run,
        openServer: openServer
    }
};

var applicationConfigs = function (args, tasks) {
    this.args = args != null ? args : null;
    this.tasks = tasks != null ? tasks : null;
}

var isEmpty = function (entity) {
    return entity === null || entity === undefined || entity < 0;
}

var execute = function (services) {
    console.log('Adicionando os servicos para execucao: ', services);
    let servicoModelo = {
    }
};

