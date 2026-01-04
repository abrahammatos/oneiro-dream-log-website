import { Translation } from "./types";

export const translations: Record<"en" | "pt", Translation> = {
  en: {
    nav: {
      home: "Home",
      privacy: "Privacy",
      terms: "Terms",
      dataDeletion: "Data Deletion",
      download: "Get App",
    },
    hero: {
      title: "Unlock the meaning of your",
      titleHighlight: "Dreams",
      subtitle:
        "Oneiro is your secure sanctuary for recording, analyzing, and understanding your subconscious mind. Explore the depths of your imagination.",
      cta: "Download on Google Play",
    },
    features: {
      title: "Why Oneiro?",
      card1Title: "Secure Journaling",
      card1Desc:
        "Your dreams are personal. We use end-to-end encryption to ensure your thoughts remain private and accessible only to you.",
      card2Title: "Sentiment Analysis",
      card2Desc:
        "Powered by AI, Oneiro analyzes the emotional tone of your dreams, helping you identify patterns in your subconscious.",
      card3Title: "Cloud Backup",
      card3Desc:
        "Never lose a memory. Sync your dream journal across devices securely with our encrypted cloud infrastructure.",
    },
    showcase: {
      title: "Experience the Journey",
      feedTitle: "Dream Feed",
      feedDesc:
        "A chronological timeline of your nights. Scroll through your history, spot recurring themes at a glance, and explore dreams shared by other people.",
      createTitle: "Intuitive Journaling",
      createDesc:
        "Capture dreams instantly upon waking. Use voice notes, tags, and emotion sliders before the memory fades.",
      searchTitle: "Deep Search",
      searchDesc:
        "Find specific symbols, characters, or emotions instantly across your entire dream history.",
      analysisTitle: "AI Interpretation",
      analysisDesc:
        'Get instant insights. Our AI breaks down symbolism and sentiment to help you understand the "why" behind the dream.',
      profileTitle: "Dreamer Profile",
      profileDesc:
        "Track your lucid dreaming streaks, most common emotions, and sleep quality stats over time.",
    },
    footer: {
      rights: "© 2026 Oneiro. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      deleteData: "Delete Account",
      contact: "Contact Support",
    },
    deletion: {
      title: "Account Deletion Request",
      intro:
        "In accordance with Google Play data safety guidelines and GDPR/LGPD, you have full control over your data. If you wish to delete your Oneiro account and permanently erase all your dream records, please follow the instructions below.",
      howToTitle: "How to request deletion:",
      appMethodTitle: "Method 1: Via App (Recommended)",
      appMethodContent:
        '1. Open Oneiro.\n2. Go to Settings \n3. Tap on "Delete My Account".',
      emailMethodTitle: "Method 2: Via Email",
      emailMethodContent:
        'If you no longer have access to the app, please send an email to support@oneiro.app with the following information:\n\nSubject: Data Deletion Request - Oneiro\nBody: "I wish to delete my account associated with the email [Insert your registered email here]."',
      afterTitle: "What happens next?",
      afterContent:
        "Our team will process your request, and all your data (profile, dreams, images) will be permanently deleted from our servers within 30 days. This action is irreversible.",
    },
    privacy: {
      title: "Oneiro Privacy Policy",
      lastUpdated: "Last Updated: January 4, 2026",
      intro:
        'Your privacy is our priority. This Privacy Policy explains how the Oneiro application ("we", "our", or "the App") collects, uses, and protects user information ("you").',
      section1Title: "1. Information We Collect",
      section1Content:
        "To provide dream journal services, we may collect the following types of data:\n\n• Account Information: When you create an account, we collect your email address and name (optional) for authentication and password recovery.\n• User Content: The texts, titles, dates, and categories of dreams you enter into the application.\n• Usage Data: Technical information about your device (model, operating system) and crash logs to improve app stability.",
      section2Title: "2. How We Use Your Data",
      section2Content:
        "We use the collected information to:\n\n• Allow you to create, edit, and save your dream records in the cloud.\n• Sync your data across different devices.\n• Respond to support requests.\n• Ensure the security of your account.",
      section3Title: "3. Data Sharing",
      section3Content:
        "We do not sell your personal data. We may share data only with essential service providers for the app's operation (e.g., database hosting and authentication services like Firebase/Google Cloud) or if required by law.",
      section4Title: "4. Security",
      section4Content:
        "We adopt industry-standard security practices to protect your data against unauthorized access. However, no method of transmission over the internet is 100% secure.",
      section5Title: "5. Your Rights (GDPR/LGPD)",
      section5Content:
        "You have the right to request:\n\n• Access to the data we hold about you.\n• Correction of incomplete or incorrect data.\n• Complete deletion of your account and all associated data.",
      section6Title: "6. Data Deletion",
      section6Content:
        "You can request the deletion of your account at any time directly in the application settings or through our Account Deletion page on our website. After the request, your data will be permanently removed from our servers within 30 days.",
      section7Title: "7. Contact",
      section7Content:
        "If you have questions about this policy, please contact us via email: support@oneiro.app",
    },
    terms: {
      title: "Oneiro Terms of Use",
      lastUpdated: "Last Updated: January 4, 2026",
      intro:
        "By downloading or using the Oneiro application, you automatically agree to these terms.",
      section1Title: "1. License to Use",
      section1Content:
        "Oneiro grants you a personal, non-exclusive, non-transferable license to use the application on your devices for personal, non-commercial purposes.",
      section2Title: "2. User Content",
      section2Content:
        "You retain ownership of all dreams and texts you record in Oneiro. You are solely responsible for the content you enter. Oneiro does not monitor the content of your private dreams but reserves the right to suspend accounts that use the service for illegal or fraudulent activities.",
      section3Title: "3. Disclaimer of Warranties",
      section3Content:
        'The application is provided "as is". While we work to keep Oneiro free of errors, we do not guarantee that operation will be uninterrupted or error-free.',
      section4Title: "4. Limitation of Liability",
      section4Content:
        "Under no circumstances shall the Oneiro developer be liable for any direct, indirect, or incidental damages resulting from the use or inability to use the application.",
      section5Title: "5. Changes to Terms",
      section5Content:
        "We may update our Terms of Use periodically. We recommend that you review this page regularly to check for any changes.",
      section6Title: "6. Governing Law",
      section6Content:
        "These terms are governed by the laws of the Federative Republic of Brazil.",
    },
    cta: {
      title: "Start your journey tonight",
      button: "Download Now",
      subtitle:
        "Join thousands of dreamers who are unlocking their subconscious potential with Oneiro.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      privacy: "Privacidade",
      terms: "Termos",
      dataDeletion: "Exclusão de Dados",
      download: "Baixar App",
    },
    hero: {
      title: "Desvende o significado dos seus",
      titleHighlight: "Sonhos",
      subtitle:
        "Oneiro é seu santuário seguro para registrar, analisar e entender seu subconsciente. Explore as profundezas da sua imaginação.",
      cta: "Baixar no Google Play",
    },
    features: {
      title: "Por que Oneiro?",
      card1Title: "Registro Seguro",
      card1Desc:
        "Seus sonhos são pessoais. Usamos criptografia de ponta a ponta para garantir que seus pensamentos permaneçam privados.",
      card2Title: "Análise de Sentimentos",
      card2Desc:
        "Impulsionado por IA, o Oneiro analisa o tom emocional dos seus sonhos, ajudando a identificar padrões no seu subconsciente.",
      card3Title: "Backup na Nuvem",
      card3Desc:
        "Nunca perca uma memória. Sincronize seu diário de sonhos entre dispositivos com segurança em nossa infraestrutura criptografada.",
    },
    showcase: {
      title: "Experiência Completa",
      feedTitle: "Feed de Sonhos",
      feedDesc:
        "Uma linha do tempo cronológica das suas noites. Role pelo histórico, identifique temas recorrentes num relance e explore sonhos compartilhados por outras pessoas.",
      createTitle: "Diário Intuitivo",
      createDesc:
        "Registre sonhos instantaneamente ao acordar. Use notas de voz, tags e medidores de emoção antes que a memória desapareça.",
      searchTitle: "Busca Inteligente",
      searchDesc:
        "Encontre símbolos específicos, personagens ou emoções instantaneamente em todo o seu histórico de sonhos.",
      analysisTitle: "Interpretação via IA",
      analysisDesc:
        'Obtenha insights instantâneos. Nossa IA analisa o simbolismo e o sentimento para ajudar você a entender o "porquê" do sonho.',
      profileTitle: "Perfil do Sonhador",
      profileDesc:
        "Acompanhe suas sequências de sonhos lúcidos, emoções mais comuns e estatísticas de qualidade do sono ao longo do tempo.",
    },
    footer: {
      rights: "© 2026 Oneiro. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      deleteData: "Excluir Conta",
      contact: "Suporte",
    },
    deletion: {
      title: "Solicitação de Exclusão de Conta",
      intro:
        "De acordo com as diretrizes de segurança de dados do Google Play e a LGPD, você tem controle total sobre seus dados. Se deseja excluir sua conta do Oneiro e apagar permanentemente todos os seus registros de sonhos, siga as instruções abaixo.",
      howToTitle: "Como solicitar a exclusão:",
      appMethodTitle: "Método 1: Pelo App (Recomendado)",
      appMethodContent:
        '1. Abra o Oneiro.\n2. Vá em Configurações \n3. Toque em "Excluir Minha Conta".',
      emailMethodTitle: "Método 2: Por E-mail",
      emailMethodContent:
        'Se você não tem mais acesso ao aplicativo, envie um e-mail para support@oneiro.app com as seguintes informações:\n\nAssunto: Solicitação de Exclusão de Dados - Oneiro\nCorpo da mensagem: "Desejo excluir minha conta associada ao e-mail [Insira seu e-mail de cadastro aqui]."',
      afterTitle: "O que acontece depois?",
      afterContent:
        "Nossa equipe processará sua solicitação e todos os seus dados (perfil, sonhos, imagens) serão permanentemente apagados de nossos servidores em até 30 dias. Esta ação é irreversível.",
    },
    privacy: {
      title: "Política de Privacidade do Oneiro",
      lastUpdated: "Última atualização: 04 de Janeiro de 2026",
      intro:
        'A sua privacidade é a nossa prioridade. Esta Política de Privacidade explica como o aplicativo Oneiro ("nós", "nosso" ou "o App") coleta, usa e protege as informações dos usuários ("você").',
      section1Title: "1. Informações que Coletamos",
      section1Content:
        "Para fornecer os serviços de diário de sonhos, podemos coletar os seguintes tipos de dados:\n\n• Informações da Conta: Quando você cria uma conta, coletamos seu endereço de e-mail e nome (opcional) para autenticação e recuperação de senha.\n• Conteúdo do Usuário: Os textos, títulos, datas e categorias dos sonhos que você insere no aplicativo.\n• Dados de Uso: Informações técnicas sobre o seu dispositivo (modelo, sistema operacional) e logs de falhas para melhorar a estabilidade do app.",
      section2Title: "2. Como Usamos Seus Dados",
      section2Content:
        "Utilizamos as informações coletadas para:\n\n• Permitir que você crie, edite e salve seus registros de sonhos na nuvem.\n• Sincronizar seus dados entre diferentes dispositivos.\n• Responder a solicitações de suporte.\n• Garantir a segurança da sua conta.",
      section3Title: "3. Compartilhamento de Dados",
      section3Content:
        "Nós não vendemos seus dados pessoais. Podemos compartilhar dados apenas com provedores de serviços essenciais para o funcionamento do app (ex: serviços de hospedagem de banco de dados e autenticação, como Firebase/Google Cloud) ou se exigido por lei.",
      section4Title: "4. Segurança",
      section4Content:
        "Adotamos práticas de segurança padrão da indústria para proteger seus dados contra acesso não autorizado. No entanto, nenhum método de transmissão pela internet é 100% seguro.",
      section5Title: "5. Seus Direitos (LGPD)",
      section5Content:
        "Você tem o direito de solicitar:\n\n• O acesso aos dados que temos sobre você.\n• A correção de dados incompletos ou errados.\n• A exclusão completa da sua conta e de todos os dados associados.",
      section6Title: "6. Exclusão de Dados",
      section6Content:
        "Você pode solicitar a exclusão da sua conta a qualquer momento diretamente nas configurações do aplicativo ou através da nossa página de Exclusão de Conta em nosso site. Após a solicitação, seus dados serão removidos permanentemente de nossos servidores em até 30 dias.",
      section7Title: "7. Contato",
      section7Content:
        "Se tiver dúvidas sobre esta política, entre em contato conosco pelo e-mail: support@oneiro.app",
    },
    terms: {
      title: "Termos de Uso do Oneiro",
      lastUpdated: "Última atualização: 04 de Janeiro de 2026",
      intro:
        "Ao baixar ou usar o aplicativo Oneiro, você concorda automaticamente com estes termos.",
      section1Title: "1. Licença de Uso",
      section1Content:
        "O Oneiro concede a você uma licença pessoal, não exclusiva e intransferível para usar o aplicativo em seus dispositivos para fins pessoais e não comerciais.",
      section2Title: "2. Conteúdo do Usuário",
      section2Content:
        "Você mantém a propriedade de todos os sonhos e textos que registrar no Oneiro. Você é o único responsável pelo conteúdo que insere. O Oneiro não monitora o conteúdo dos seus sonhos privados, mas reserva-se o direito de suspender contas que utilizem o serviço para atividades ilegais ou fraudulentas.",
      section3Title: "3. Isenção de Garantias",
      section3Content:
        'O aplicativo é fornecido "no estado em que se encontra" ("as is"). Embora trabalhemos para manter o Oneiro livre de erros, não garantimos que o funcionamento será ininterrupto ou livre de falhas.',
      section4Title: "4. Limitação de Responsabilidade",
      section4Content:
        "Em nenhuma circunstância o desenvolvedor do Oneiro será responsável por quaisquer danos diretos, indiretos ou incidentais resultantes do uso ou da incapacidade de usar o aplicativo.",
      section5Title: "5. Alterações nos Termos",
      section5Content:
        "Podemos atualizar nossos Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para verificar quaisquer alterações.",
      section6Title: "6. Lei Aplicável",
      section6Content:
        "Estes termos são regidos pelas leis da República Federativa do Brasil.",
    },
    cta: {
      title: "Comece sua jornada hoje à noite",
      button: "Baixe o App",
      subtitle:
        "Junte-se a milhares de sonhadores que estão desbloqueando o potencial do seu subconsciente com o Oneiro.",
    },
  },
};
