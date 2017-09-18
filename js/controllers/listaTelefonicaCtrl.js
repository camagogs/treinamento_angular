   angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope,contatosAPI,operadorasAPI){
            $scope.app = "Lista Telefonica";
            $scope.contatos = [];
            $scope.operadoras = [];
            
            var carregarContatos = function(){
                contatosAPI.getContatos().then(function(response){
                    $scope.contatos = response.data;
                }).catch(function(data, status){
                    $scope.message = "Aconteceu um problema" + + data;
                });
            };
            var carregarOperadoras = function(){
                operadorasAPI.getOperadoras().then(function(response){
                    $scope.operadoras = response.data;
                });
            };
            $scope.adicionarContato = function(contato){
                contato.data =  new Date();
                contatosAPI.saveContato(contato).then(function (data){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                });   
            };
            $scope.apagarContato = function(contatos){
                $scope.contatos = contatos.filter(function (contato){
                    if (!contato.selecionado) return contato;
                }); 
            };
            $scope.iscontatosSelecionados = function(contatos){
                return contatos.some(function(contato){
                    return contato.selecionado;        
                });
            };
            $scope.ordernarPor = function(campo){
                $scope.criterioDeOrdenacao = campo;
                $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
            };
            carregarContatos();
            carregarOperadoras();
        });