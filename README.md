# FitFlow - Sistema de Gestão de Treinamento Físico

## 📱 Sobre o Projeto

FitFlow é um aplicativo móvel desenvolvido em React Native com Expo para gestão inteligente de treinamento físico. O sistema integra a **Escala Subjetiva de Recuperação (ESR)** com **Zonas de Treinamento** calculadas pela **Metodologia de Karvonen**, permitindo que treinadores e atletas monitorem e otimizem o desempenho físico de forma personalizada.

### 🎯 Objetivos

- Facilitar a comunicação entre atletas e treinadores
- Monitorar métricas comportamentais de bem-estar físico e emocional
- Personalizar planos de treino baseados em dados reais de recuperação
- Prevenir lesões através do acompanhamento da carga de treinamento
- Otimizar o desempenho atlético com base em zonas de treinamento precisas

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas Completa

\`\`\`
MobileFitnessManagementApp/
├── App.js                          # Ponto de entrada principal com navegação
├── app.json                        # Configuração do Expo
├── babel.config.js                 # Configuração do Babel para React Native
├── package.json                    # Dependências e scripts do projeto
│
├── src/
│   ├── screens/                    # 13 telas do aplicativo
│   │   ├── SplashWelcome.js       # Tela inicial com animações
│   │   ├── AuthLogin.js           # Autenticação com remember me
│   │   ├── AtletaHome.js          # Dashboard do atleta com progresso semanal
│   │   ├── TreinadorDashboard.js  # Dashboard do treinador com ESR global
│   │   ├── ESRModal.js            # Modal de registro ESR com slider
│   │   ├── SessionsList.js        # Lista de sessões com filtros
│   │   ├── SessionDetail.js       # Detalhes da sessão com timer
│   │   ├── History.js             # Histórico com gráficos interativos
│   │   ├── ProfileAtleta.js       # Perfil com sincronização de saúde
│   │   ├── MessagesInbox.js       # Mensagens com envio otimista
│   │   ├── AthleteDetailTreinador.js  # Detalhes do atleta para treinador
│   │   ├── PlanEditor.js          # Editor de plano com duplicação
│   │   └── AssessmentCreate.js    # Criação de avaliação com peso opcional
│   │
│   ├── components/                 # 6 componentes reutilizáveis
│   │   ├── Icons.js               # 15+ ícones SVG customizados
│   │   ├── Toast.js               # Sistema de notificações toast
│   │   ├── LoadingButton.js       # Botão com estado de loading
│   │   ├── FilterChips.js         # Chips de filtro horizontais
│   │   ├── EmptyState.js          # Estado vazio com emoji e CTA
│   │   └── OfflineBanner.js       # Banner de modo offline
│   │
│   └── theme/                      # Sistema de design tokens
│       ├── colors.js              # Paleta completa + dark mode
│       ├── typography.js          # Hierarquia tipográfica
│       └── spacing.js             # Sistema de espaçamento 8px
│
└── README.md                       # Documentação completa
\`\`\`

---

## 🎨 Design System Completo

### Paleta de Cores

\`\`\`javascript
export const colors = {
  // Cores Principais
  primary: '#0B67A4',
  primaryLight: '#E8F4FA',
  primaryDark: '#073D66',
  
  // Cores de Ação
  action: '#FF6B35',
  actionLight: '#FFE8E0',
  
  // Cores de Superfície
  background: '#F6F7F9',
  surface: '#FFFFFF',
  neutralBg: '#F0F2F5',
  
  // Cores de Texto
  text: '#1A1A1A',
  textSecondary: '#737373',
  textTertiary: '#A0A0A0',
  
  // Cores de Borda
  border: '#E6E9EE',
  divider: '#F0F2F5',
  
  // Cores de Estado
  success: '#17A661',
  warning: '#F5A623',
  danger: '#D64545',
  info: '#0B67A4',
  
  // Zonas de Treinamento
  zone1: '#17A661',
  zone2: '#1FC978',
  zone3: '#F5A623',
  zone4: '#FF6B35',
  zone5: '#D64545',
  
  // Cores Utilitárias
  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0, 0, 0, 0.5)',
}

export const colorsDark = {
  primary: '#4A9FD8',
  primaryLight: '#1E3A52',
  background: '#121212',
  surface: '#1E1E1E',
  text: '#E5E5E5',
  textSecondary: '#A0A0A0',
  border: '#2C2C2C',
  // ... outros tokens dark
}

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
}

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
}
\`\`\`

### Tipografia

- **Títulos**: System Font Bold (700)
- **Subtítulos**: System Font Semibold (600)
- **Corpo**: System Font Regular (400)
- **Tamanhos**: 12px, 14px, 16px, 18px, 24px, 28px

### Design Tokens Detalhados

#### `theme/typography.js`
\`\`\`javascript
export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
    extrabold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
}
\`\`\`

#### `theme/spacing.js`
\`\`\`javascript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
}
\`\`\`

### Estados Visuais

O aplicativo implementa feedback visual consistente para todas as interações:

#### Loading States
- **Spinner nos botões**: Indicador de carregamento com animação circular
- **Skeleton screens**: Placeholders animados durante carregamento de listas
- **Pull-to-refresh**: Indicador de atualização em listas

#### Toasts e Notificações
- **Sucesso**: Toast verde com ícone de check (3s de duração)
- **Erro**: Toast vermelho com ícone de alerta (4s de duração)
- **Informação**: Toast azul com ícone de info (3s de duração)

#### Empty States
- **Sem registros**: Ilustração + texto "Ainda sem registros" + CTA
- **Sem conexão**: Ícone de wifi + mensagem + botão "Tentar novamente"
- **Sem resultados**: Mensagem contextual baseada no filtro aplicado

### Microinterações

Detalhes de interação que melhoram a experiência do usuário:

#### Slider ESR
- **Tooltip numérica**: Valor atual exibido acima do slider durante arraste
- **Cores dinâmicas**: Slider muda de cor conforme o valor (vermelho → amarelo → verde)
- **Feedback tátil**: Vibração leve ao atingir valores-chave (0, 5, 10)

#### Cards de Sessão
- **Swipe para ação**: Arrastar card para esquerda revela botão "Marcar concluída"
- **Animação de conclusão**: Check verde com animação de escala ao concluir
- **Pressionar e segurar**: Exibe menu de contexto com ações rápidas

#### Feedback Tátil (Haptic)
- **Ações principais**: Vibração ao enviar ESR, salvar plano, concluir sessão
- **Navegação**: Feedback sutil ao trocar de aba
- **Erros**: Vibração de erro ao falhar validação

---

## ⚠️ Tratamento de Erros

### Validação de Formulários

#### Campos Obrigatórios
- **Indicação visual**: Borda vermelha em campos inválidos
- **Mensagem de erro**: Texto vermelho abaixo do campo explicando o problema
- **Validação em tempo real**: Feedback imediato ao sair do campo

#### Erros Comuns

**Login Inválido**
- Toast vermelho: "Email ou senha incorretos"
- Campos mantêm valores digitados
- Botão "Esqueci minha senha" destacado

**Falha no Envio de ESR**
- Toast vermelho: "Não foi possível enviar. Tente novamente."
- Dados preservados no formulário
- Opção de salvar localmente (modo offline)

**Erro de Conexão**
- Banner amarelo persistente: "Sem conexão. Trabalhando offline."
- Dados salvos localmente
- Sincronização automática ao reconectar

**Sessão Expirada**
- Modal informativo: "Sua sessão expirou. Faça login novamente."
- Redirecionamento automático para tela de login
- Preservação do estado da navegação

---

## 🔄 Navegação Detalhada

### App.js - Estrutura de Navegação

\`\`\`javascript
<NavigationContainer>
  <Stack.Navigator>
    {/* Telas de Autenticação */}
    <Stack.Screen name="Splash" component={SplashWelcome} />
    <Stack.Screen name="Auth" component={AuthLogin} />
    
    {/* Navegação do Atleta (Bottom Tabs) */}
    <Stack.Screen name="AthleteMain" component={AthleteTabNavigator} />
    
    {/* Navegação do Treinador (Bottom Tabs) */}
    <Stack.Screen name="CoachMain" component={CoachTabNavigator} />
    
    {/* Telas Modais e Detalhes */}
    <Stack.Screen name="ESRModal" component={ESRModal} options={{ presentation: 'modal' }} />
    <Stack.Screen name="SessionDetail" component={SessionDetail} />
    <Stack.Screen name="AthleteDetail" component={AthleteDetailTreinador} />
    <Stack.Screen name="PlanEditor" component={PlanEditor} />
    <Stack.Screen name="Assessment" component={AssessmentCreate} />
  </Stack.Navigator>
</NavigationContainer>
\`\`\`

### AthleteTabNavigator (Bottom Tabs)
\`\`\`javascript
<Tab.Navigator>
  <Tab.Screen name="Home" component={AtletaHome} />
  <Tab.Screen name="Sessions" component={SessionsList} />
  <Tab.Screen name="History" component={History} />
  <Tab.Screen name="Messages" component={MessagesInbox} />
  <Tab.Screen name="Profile" component={ProfileAtleta} />
</Tab.Navigator>
\`\`\`

### CoachTabNavigator (Bottom Tabs)
\`\`\`javascript
<Tab.Navigator>
  <Tab.Screen name="Dashboard" component={TreinadorDashboard} />
  <Tab.Screen name="Messages" component={MessagesInbox} />
  <Tab.Screen name="Profile" component={ProfileAtleta} />
</Tab.Navigator>
\`\`\`

---

## 🎯 Funcionalidades Implementadas

### ✅ Modo Offline
- Detecção automática de conexão
- Banner de aviso persistente
- Salvamento local de ESRs e notas
- Sincronização automática ao reconectar
- Fila de operações pendentes

### ✅ Estados Visuais
- Loading states em botões e listas
- Skeleton screens durante carregamento
- Toasts para feedback de ações
- Empty states com CTAs
- Error states com retry

### ✅ Microinterações
- Tooltip no slider ESR
- Swipe gestures em cards
- Haptic feedback em ações principais
- Animações de transição suaves
- Feedback visual em botões

### ✅ Tela History Avançada
- Filtros de período (7/30/90 dias)
- Gráfico interativo com tooltips
- Cards de resumo estatístico
- Fallback visual para dados vazios
- Exportação de dados (futuro)

### ✅ Mensagens com Envio Otimista
- Mensagem aparece instantaneamente
- Estados: Enviando, Enviada, Lida, Falha
- Botão de retry em falhas
- Agrupamento por data
- Indicador de não lidas

### ✅ Dashboard do Treinador
- Gráfico ESR global da equipe
- Modo compacto/expandido
- Badges de alerta coloridos
- Filtros de status
- Ações rápidas

### ✅ Perfil com Sincronização
- Toggle Google Fit / Apple Health
- Edição de informações
- Preview de imagem de perfil
- Microcopy de privacidade
- Dados físicos e FC

### ✅ Session Detail Completo
- Botão "Iniciar treino" time-based
- Ícone de compartilhamento
- Campo de notas pós-treino
- Salvamento offline
- Link para ESR relacionado

### ✅ Assessment com Peso
- Campo peso opcional
- Cálculo automático de zonas
- Validação de FC Repouso
- Visualização de zonas coloridas
- Observações do treinador

---

## 📊 Metodologia de Karvonen

### Fórmula

A metodologia de Karvonen calcula as zonas de treinamento baseadas na frequência cardíaca:

\`\`\`
FC Alvo = ((FC Máx - FC Repouso) × % Intensidade) + FC Repouso
\`\`\`

### Zonas de Treinamento

| Zona | Nome | % Intensidade | Cor | Objetivo |
|------|------|---------------|-----|----------|
| 1 | Recuperação | 50-60% | Verde (#17A661) | Recuperação ativa |
| 2 | Aeróbica | 60-70% | Verde claro (#1FC978) | Base aeróbica |
| 3 | Tempo | 70-80% | Amarelo (#F5A623) | Limiar anaeróbico |
| 4 | Anaeróbica | 80-90% | Laranja (#FF6B35) | Alta intensidade |
| 5 | Máxima | 90-100% | Vermelho (#D64545) | Esforço máximo |

### Exemplo de Cálculo

\`\`\`
Atleta: 28 anos
FC Máxima: 220 - 28 = 192 bpm
FC Repouso: 60 bpm

Zona 1 (50-60%):
  Mínimo: ((192 - 60) × 0.50) + 60 = 126 bpm
  Máximo: ((192 - 60) × 0.60) + 60 = 139 bpm
\`\`\`

---

## 📈 Escala Subjetiva de Recuperação (ESR)

### Escala de 0-10

| Valor | Status | Cor | Descrição |
|-------|--------|-----|-----------|
| 0-3 | Baixo | Vermelho (#D64545) | Muito cansado, necessita recuperação |
| 4-6 | Moderado | Amarelo (#F5A623) | Recuperação parcial, treino leve |
| 7-10 | Ótimo | Verde (#17A661) | Bem recuperado, pronto para treinar |

### Tipos de Registro

1. **Diário**: Avaliação geral do dia
2. **Pré-treino**: Antes da sessão de treino
3. **Pós-treino**: Após a sessão de treino

---

## 🗄️ Modelo de Dados

### Entidades Principais

\`\`\`
Usuario
├── id
├── nome
├── email
├── senha
├── tipo (atleta/treinador)
├── data_criacao
└── ultimo_login

Atleta
├── id
├── data_nascimento
├── peso
├── altura
├── frequencia_cardiaca_repouso
└── treinador_id (FK)

Treinador
├── id
├── cref
└── especialidade

EscalaSubjetiva
├── id
├── tipo (diario/pre/post)
├── valor (0-10)
├── data
└── atleta_id (FK)

AvaliacaoFisica
├── id
├── data
├── frequencia_cardiaca
├── observacoes
├── zona_treinamento
├── atleta_id (FK)
└── treinador_id (FK)

PlanoTreinamento
├── id
├── nome
├── descricao
├── data_inicio
├── data_fim
├── atleta_id (FK)
└── treinador_id (FK)

SessaoTreinamento
├── id
├── zona_alvo
├── tipo
├── intensidade
├── duracao
├── data
└── plano_id (FK)

Feedback
├── id
├── mensagem
├── data
├── atleta_id (FK)
└── treinador_id (FK)
\`\`\`

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI
- Expo Go (app no celular) ou emulador

### Instalação

\`\`\`bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npx expo start
\`\`\`

### Executar no Dispositivo

1. Instale o **Expo Go** no seu celular (iOS/Android)
2. Escaneie o QR code que aparece no terminal
3. O app será carregado automaticamente

### Executar no Emulador

\`\`\`bash
# Android
npx expo start --android

# iOS (apenas macOS)
npx expo start --ios
\`\`\`

---

## 📦 Dependências Principais

\`\`\`json
{
  "expo": "~52.0.0",
  "react": "18.3.1",
  "react-native": "0.76.5",
  "@react-navigation/native": "^7.0.0",
  "@react-navigation/stack": "^7.0.0",
  "@react-navigation/bottom-tabs": "^7.0.0",
  "react-native-gesture-handler": "~2.20.0",
  "react-native-reanimated": "~3.16.0",
  "react-native-svg": "15.9.0",
  "react-native-safe-area-context": "4.12.0",
  "react-native-screens": "~4.4.0"
}
\`\`\`

## 🧪 Scripts Disponíveis

\`\`\`bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
\`\`\`

---

## 🎯 Funcionalidades Futuras

### Fase 2
- [ ] Integração com wearables (Google Fit, Apple Health)
- [ ] Notificações push para lembretes de ESR
- [ ] Chat em tempo real entre atleta e treinador
- [ ] Gráficos avançados de evolução

### Fase 3
- [ ] Análise psicológica e motivacional
- [ ] Ajustes baseados no ciclo menstrual (atletas femininas)
- [ ] Integração com assistentes de voz
- [ ] Modo offline com sincronização (em desenvolvimento)

### Fase 4
- [ ] Marketplace de planos de treino
- [ ] Comunidade de atletas
- [ ] Gamificação e conquistas
- [ ] Exportação de relatórios PDF

---

## 📚 Documentação Adicional

- [FLUXO_USUARIOS.md](./FLUXO_USUARIOS.md) - Fluxos detalhados de navegação para atletas e treinadores

---

## 👥 Equipe

**Autores:**
- Ana Carolina dos Santos Pio
- Vinícius Del Santo Campos da Silva

**Instituição:** Universidade de Vassouras  
**Curso:** Engenharia de Software  
**Orientador:** David Caravana de Castro Moraes Ricci

---

## 📄 Licença

Este projeto é parte de um Trabalho de Conclusão de Curso (TCC) e está protegido por direitos autorais acadêmicos.

---

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do repositório do projeto.

---

**Última atualização:** Janeiro 2025
