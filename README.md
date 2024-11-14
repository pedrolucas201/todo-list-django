```markdown
# Todo-List com Django e React

Este é um projeto de gerenciamento de tarefas construído com **Django** no backend e **React** com **TypeScript** no frontend. O aplicativo permite criar, listar, editar e excluir tarefas de forma intuitiva e minimalista, com uma interface moderna.

## Tecnologias Utilizadas

### Backend
- **Django**: Framework de desenvolvimento web usado para construir a API do backend.
- **Django REST Framework**: Para facilitar a criação de APIs RESTful.
- **SQLite**: Banco de dados utilizado para armazenamento de dados (pode ser trocado por PostgreSQL ou MySQL em produção).

### Frontend
- **React**: Biblioteca JavaScript para criação da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta para criação e desenvolvimento rápido de aplicações frontend.
- **Axios**: Cliente HTTP para comunicação com a API Django.

## Funcionalidades

- **Adicionar Tarefa**: Cria uma nova tarefa com título e descrição.
- **Listar Tarefas**: Exibe todas as tarefas criadas, mostrando título e descrição.
- **Excluir Tarefa**: Permite remover tarefas da lista.
- **Interface Responsiva e Minimalista**: Uma interface centralizada, com uma paleta de cores roxo e preto.

## Estrutura do Projeto

```
to-do-list
├── todo_env/                 # Ambiente virtual para o Django
├── todolist_project/         # Backend Django
│   ├── manage.py
│   └── todo_app/             # App principal da API
│       ├── models.py         # Modelo Task
│       ├── views.py          # Lógica da API
│       ├── serializers.py    # Serializador do DRF
│       └── urls.py           # Rotas do app
└── todo-frontend/            # Frontend React com TypeScript
    ├── src/
    │   ├── App.tsx           # Componente principal
    │   ├── components/       # Componentes de UI
    │   ├── services/         # API requests (axios)
    │   └── types/            # Definições de tipos TypeScript
    └── vite.config.ts
```

## Instalação e Configuração

### Pré-requisitos

- Python 3.x
- Node.js e npm

### Backend (Django)

1. **Clone o Repositório**:
   ```bash
   git clone git@github.com:pedrolucas201/todo-list-django.git
   cd to-do-list
   ```

2. **Crie e Ative o Ambiente Virtual**:
   ```bash
   python3 -m venv todo_env
   source todo_env/bin/activate
   ```

3. **Instale as Dependências do Backend**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Execute as Migrações**:
   ```bash
   python3 manage.py makemigrations
   python3 manage.py migrate
   ```

5. **Inicie o Servidor do Django**:
   ```bash
   python3 manage.py runserver
   ```

### Frontend (React com Vite)

1. **Instale as Dependências do Frontend**:
   ```bash
   cd todo-frontend
   npm install
   ```

2. **Inicie o Servidor de Desenvolvimento do Vite**:
   ```bash
   npm run dev
   ```

### Acessando o Projeto

- **Backend Django**: Acesse a API em `http://127.0.0.1:8000/api/tasks/`
- **Frontend React**: Acesse o frontend em `http://localhost:5173`

## Configuração de CORS

Para permitir que o frontend se comunique com o backend, o `django-cors-headers` foi configurado no Django. Certifique-se de que o `CORS_ALLOW_ALL_ORIGINS = True` está configurado no `settings.py` do Django.

## Próximos Passos

- **Autenticação de Usuário**: Implementar um sistema de autenticação para permitir tarefas exclusivas por usuário.
- **Filtros e Busca**: Adicionar filtros e barra de busca para facilitar a navegação entre as tarefas.
- **Atualização em Tempo Real**: Implementar WebSockets ou outra tecnologia para atualizações automáticas em tempo real.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto é licenciado sob a licença MIT.
```

Esse `README.md` oferece uma visão completa do projeto, com instruções de configuração, tecnologia usada e funcionalidades principais. Se precisar de mais alguma personalização, me avise!