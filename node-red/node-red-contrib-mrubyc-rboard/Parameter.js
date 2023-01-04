module.exports = function(RED) {
    
    function Parameter_Node(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        //this.variable = config.variable;
        this.name = config.name;


        //エラーハンドリング
        node.on('input', function () {

            if (node.name == "") {
                throw new Error("変数が設定されていません。変数を設定して下さい。");

            }         
        });

        RED.nodes.registerType("Parameter",Parameter_Node);
    }
}