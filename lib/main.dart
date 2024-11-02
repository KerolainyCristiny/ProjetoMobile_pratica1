// componentes de interface do usuário (UI) e funcionalidades básicas.
import 'package:flutter/material.dart'; 

// função de entrada do aplicativo
void main() {
  //função inicializa o aplicativo e leva o widget MyApp à tela.
  runApp(const MyApp());
}

//StatelessWidget - significa que seu conteúdo não muda ao longo do tempo.
class MyApp extends StatelessWidget {
  const MyApp({super.key}); // O construtor usa super.key para permitir que o Flutter gerencie a chave do widget.


// build: Método que constrói a interface do usuário. O parâmetro context fornece informações sobre o ambiente do widget.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Bottom Nav',
      home: const MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}


// StatefulWidget: Esta classe permite que o widget mantenha estado. O estado pode mudar ao longo do tempo, 
// como a seleção no BottomNavigationBar.
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key}); // construtor

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}


// classe que gerencia o estado de MyHomePage.
class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0; // Mantém o índice da aba selecionada.

  final List<Widget> _pages = [
    const HomeScreen(),
    const SearchScreen(),
    const ProfileScreen(),
  ];

// metodo que informa que um botão do bottom nav foi clicado, 
// informando que o index mudou
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }


//
  @override
  Widget build(BuildContext context) {
    return Scaffold( // Scaffold: Um layout básico que fornece uma estrutura para a UI.
      appBar: AppBar(
        title: const Text('Bottom Navigation Example'),
      ),
      body: _pages[_selectedIndex], // o corpo da pagina muda de acordo com que foi clicado no bottom nav, de acordo com o index
      
      // essa função cria a barra de navegação
      bottomNavigationBar: BottomNavigationBar( 
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Pesquisa',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Perfil',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}

// classe que define o corpo da tela
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Página Inicial',
        style: TextStyle(fontSize: 24),
      ),
    );
  }
}

class SearchScreen extends StatelessWidget {
  const SearchScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Página de Pesquisa',
        style: TextStyle(fontSize: 24),
      ),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Página de Perfil',
        style: TextStyle(fontSize: 24),
      ),
    );
  }
}
