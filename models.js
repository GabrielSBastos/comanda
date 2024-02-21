let modelsJson = [
    // pratos individuais
        {id:1, name:'Ceviche de Truta com Abacate', img:'img/Ki61Hien.png', price:[46.00, 46.00, 46.00], sizes:['', '', ''], description:''},
        {id:2, name:'Filé de Frango com Creme de Milho', img:'img/Me109G6.png', price:[46.00, 46.00, 46.00], sizes:['', '', ''], description:''},
        {id:3, name:'Filé de Saint Peter', img:'img/P47D.png', price:[64.00, 64.00, 64.00], sizes:['', '', ''], description:''},
        {id:4, name:'Filé de Truta Grelhado', img:'img/P51D.png', price:[73.00, 73.00, 73.00], sizes:['', '', ''], description:''},
        {id:5, name:'Berinjela Recheada', img:'img/SpitMk9.png', price:[64.00, 64.00, 64.00], sizes:['', '', ''], description:''},
        {id:6, name:'Lasanha de Shiatake', img:'img/SpitMk9.png', price:[68.00, 68.00, 68.00], sizes:['', '', ''], description:''},
    // pratos 2
        {id:7, name:'Prato Caipira', img:'img/SpitMk9.png', price:[98.00, 98.00, 98.00], sizes:['', '', ''], description:''},
    //porçoes
        {id:8, name:'Bolinho Caipira', img:'img/Ki61Hien.png', price:[35.00, 35.00, 35.00], sizes:['', '', ''], description:''},
        {id:9, name:'Mandioca Frita', img:'img/Me109G6.png', price:[39.00, 39.00, 39.00], sizes:['', '', ''], description:''},
        {id:10, name:'Fritas', img:'img/P47D.png', price:[35.00, 35.00, 35.00], sizes:['', '', ''], description:''},
        {id:11, name:'Isca de Filé de Tilápia', img:'img/P51D.png', price:[64.00, 64.00, 64.00], sizes:['', '', ''], description:''},
        {id:12, name:'Isca de Filé de Truta', img:'img/SpitMk9.png', price:[68.00, 68.00, 68.00], sizes:['', '', ''], description:''},
        {id:13, name:'Frango a Passarinho', img:'img/SpitMk9.png', price:[38.00, 38.00, 38.00], sizes:['', '', ''], description:''},
        {id:14, name:'Torresmo', img:'img/SpitMk9.png', price:[40.00, 40.00, 40.00], sizes:['', '', ''], description:''},
        {id:15, name:'Salada Individual', img:'img/Ki61Hien.png', price:[23.00, 23.00, 23.00], sizes:['', '', ''], description:''},
        {id:16, name:'Arroz ou Feijão Individual', img:'img/Me109G6.png', price:[12.00, 12.00, 12.00], sizes:['', '', ''], description:''},
    // prato do dia
       {id:17, name:'Prato do Dia', img:'img/Me109G6.png', price:[45.00, 45.00, 45.00], sizes:['', '', ''], description:''},
    //bebidas
       {id:18, name:'Cerveja Long Neck', img:'img/Ki61Hien.png', price:[14.00, 14.00, 14.00], sizes:['', '', ''], description:''},
       {id:19, name:'Cerveja Lata', img:'img/Me109G6.png', price:[9.00, 9.00, 9.00], sizes:['', '', ''], description:''},
       {id:20, name:'Cerveja Artesanal', img:'img/Me109G6.png', price:[32.00, 32.00, 32.00], sizes:['', '', ''], description:''},
       {id:21, name:'Cerveja Garrafa 600ml', img:'img/P47D.png', price:[22.00, 22.00, 22.00], sizes:['', '', ''], description:''},
       {id:22, name:'Refrigerante/Tonica Lata', img:'img/P47D.png', price:[8.00, 8.00, 8.00], sizes:['', '', ''], description:''},
       {id:23, name:'Suco Natural', img:'img/P47D.png', price:[15.00, 15.00, 15.00], sizes:['', '', ''], description:''},
       {id:24, name:'Suco de Uva Integral copo', img:'img/P47D.png', price:[15.00, 15.00, 15.00], sizes:['', '', ''], description:''},
       {id:25, name:'Água c/s gás', img:'img/P47D.png', price:[5.00, 5.00, 5.00], sizes:['', '', ''], description:''},
       {id:26, name:'Gatorade', img:'img/P47D.png', price:[8.00, 8.00, 8.00], sizes:['', '', ''], description:''},
       {id:27, name:'Café Preto', img:'img/P47D.png', price:[6.00, 6.00, 6.00], sizes:['', '', ''], description:''},
       {id:28, name:'Vinho Seco/Suave', img:'img/P47D.png', price:[20.00, 20.00, 20.00], sizes:['', '', ''], description:''},
       {id:29, name:'Cachaça', img:'img/P47D.png', price:[8.00, 8.00, 8.00], sizes:['', '', ''], description:''},
       {id:30, name:'Whisky', img:'img/P47D.png', price:[20.00, 20.00, 20.00], sizes:['', '', ''], description:''},
       {id:31, name:'Caipirinha de Pinga', img:'img/P47D.png', price:[25.00, 25.00, 25.00], sizes:['', '', ''], description:''},
       {id:32, name:'Caipirinha de Saque', img:'img/P47D.png', price:[30.00, 30.00, 30.00], sizes:['', '', ''], description:''},
       {id:33, name:'Caipirinha de Vodka', img:'img/P47D.png', price:[30.00, 30.00, 30.00], sizes:['', '', ''], description:''},
       {id:34, name:'Gin', img:'img/P47D.png', price:[30.00, 30.00, 30.00], sizes:['', '', ''], description:''},
       {id:35, name:'Licor', img:'img/P47D.png', price:[10.00, 10.00, 10.00], sizes:['', '', ''], description:''},
     //sobremesa
       {id:35, name:'Sobremesa (10,00)', img:'img/P47D.png', price:[10.00, 10.00, 10.00], sizes:['', '', ''], description:''},
       {id:36, name:'Sobremesa (12,00)', img:'img/P47D.png', price:[12.00, 12.00, 12.00], sizes:['', '', ''], description:''},
       {id:37, name:'Sobremesa (14,00)', img:'img/P47D.png', price:[14.00, 14.00, 14.00], sizes:['', '', ''], description:''},
       {id:38, name:'Sobremesa (16,00)', img:'img/P47D.png', price:[16.00, 16.00, 16.00], sizes:['', '', ''], description:''},
       {id:39, name:'Sobremesa (18,00)', img:'img/P47D.png', price:[18.00, 18.00, 18.00], sizes:['', '', ''], description:''},
       {id:40, name:'Sobremesa (20,00)', img:'img/P47D.png', price:[20.00, 20.00, 20.00], sizes:['', '', ''], description:''},
    //couvert
       {id:41, name:'Couvert', img:'img/P47D.png', price:[10.00, 10.00, 10.00], sizes:['', '', ''], description:'Coloque o valor do Couvert:'},
    
    
    // por kilo
      {id:42, name:'Prato Por Kilo 1(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:43, name:'Prato Por Kilo 2(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:44, name:'Prato Por Kilo 3(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:45, name:'Prato Por Kilo 4(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:46, name:'Prato Por Kilo 5(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:47, name:'Prato Por Kilo 6(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:48, name:'Prato Por Kilo 7(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:49, name:'Prato Por Kilo 8(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:50, name:'Prato Por Kilo 9(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:51, name:'Prato Por Kilo 10(preço inteiro)', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'Coloque o valor do Kilo:'},
      {id:52, name:'Centavos(0.1)', img:'img/P47D.png', price:[0.01, 0.01, 0.01], sizes:['', '', ''], description:'Coloque o valor dos centavos que faltam:'},
      {id:53, name:'Centavos(0.25)', img:'img/P47D.png', price:[0.25, 0.25, 0.25], sizes:['', '', ''], description:'Coloque o valor dos centavos que faltam:'},  
    // ítem avulço
      {id:54, name:'________________________________', img:'img/P47D.png', price:[1.00, 1.00, 1.00], sizes:['', '', ''], description:'item não registrado (inserir nome)'},  
    
    
    ];
    
    
    