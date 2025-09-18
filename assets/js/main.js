const translations = {
  en: {
    branding: {
      title: 'GoTools Lab',
    },
    navigation: {
      allTools: 'All tools',
      categories: 'Categories',
      editor: 'Online editor',
      support: 'Support',
      languageLabel: 'Language',
      cta: 'Start now',
    },
    hero: {
      kicker: 'One toolkit for every creator',
      title: 'Powerful online tools with crystal-clear categories',
      subtitle:
        'Tackle media, documents, and everyday tasks in seconds. Switch the entire experience to your preferred language and stay productive anywhere.',
      primary: 'Try the online editor',
      secondary: 'Explore categories',
    },
    showcase: {
      media: {
        title: 'Media conversion',
        body: 'Compress, convert, and trim audio or video files right in your browser.',
      },
      documents: {
        title: 'Smart documents',
        body: 'Merge, sign, or transform PDFs without uploading sensitive data.',
      },
      utilities: {
        title: 'Quick utilities',
        body: 'From screen recorders to GIF makers, launch a tool in one click.',
      },
    },
    search: {
      label: 'Search tools',
      placeholder: 'Search for a tool…',
      meta: '48 tools & growing — filter by typing',
    },
    categories: {
      title: 'Curated categories',
      subtitle:
        'Jump straight into the toolkit you need. Every category bundles focused tools with consistent interfaces.',
    },
    category: {
      audio: {
        title: 'Audio studio',
        description: 'Trim, mix, and convert audio formats without leaving your browser.',
      },
      video: {
        title: 'Video lab',
        description: 'Edit, resize, and compress videos with lightning-fast previews.',
      },
      document: {
        title: 'Document hub',
        description: 'Securely transform PDFs, Office files, and scans across formats.',
      },
      utility: {
        title: 'Everyday utilities',
        description: 'Lightweight helpers for screenshots, archives, and productivity.',
      },
    },
    tool: {
      audioTrimmer: {
        title: 'Audio trimmer',
        description: 'Cut MP3 or WAV clips precisely online.',
      },
      audioConverter: {
        title: 'Audio converter',
        description: 'Switch between MP3, WAV, FLAC, and more instantly.',
      },
      noiseReducer: {
        title: 'Noise reducer',
        description: 'Clean background noise with AI-powered smoothing.',
      },
      videoCutter: {
        title: 'Video cutter',
        description: 'Split videos into scenes in seconds.',
      },
      videoCompressor: {
        title: 'Video compressor',
        description: 'Reduce file sizes without losing HD clarity.',
      },
      subtitleMaker: {
        title: 'Subtitle maker',
        description: 'Generate subtitles with live translations.',
      },
      pdfMerge: {
        title: 'PDF merger',
        description: 'Combine multiple PDFs into a single file.',
      },
      pdfSigner: {
        title: 'PDF signer',
        description: 'Add signatures with legally binding timestamps.',
      },
      ocrReader: {
        title: 'OCR reader',
        description: 'Extract text from scans in 120+ languages.',
      },
      screenRecorder: {
        title: 'Screen recorder',
        description: 'Capture your screen with microphone audio.',
      },
      gifMaker: {
        title: 'GIF maker',
        description: 'Create looping GIFs from any video clip.',
      },
      archiveManager: {
        title: 'Archive manager',
        description: 'Zip and unzip archives with drag-and-drop convenience.',
      },
    },
    highlights: {
      privacy: {
        title: 'Privacy-first workflow',
        body: 'Your files stay in your browser. Processing happens locally whenever possible for maximum security.',
      },
      speed: {
        title: 'Optimised for speed',
        body: 'Global CDNs and GPU acceleration mean every tool is ready instantly no matter where you are.',
      },
      accessibility: {
        title: 'Inclusive design',
        body: 'Keyboard shortcuts, dark theme, and localisation support create a universal experience.',
      },
    },
    editor: {
      title: 'Live online editor',
      subtitle:
        'Format documents, collaborate in real time, and export text instantly. All changes happen in your browser with auto-save support.',
      welcomeTitle: 'Welcome to the GoTools Lab editor',
      welcomeBody:
        'Use the toolbar to style text, load ready-made templates, or export your document without installing extra apps.',
      templatesTitle: 'Quick templates',
      templates: {
        meeting: 'Meeting notes',
        content: 'Content brief',
        todo: 'Action plan',
      },
      status: 'Changes saved locally',
      toolbar: {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        bullet: 'Bulleted list',
        numbered: 'Numbered list',
        clear: 'Clear formatting',
        download: 'Download as TXT',
        copy: 'Copy to clipboard',
        theme: 'Toggle dark theme',
      },
    },
    global: {
      title: 'Made for a global audience',
      subtitle:
        'We partner with creators and teams from 120+ countries. Switch between languages in one click and keep the same intuitive layout.',
      localization: {
        title: 'Adaptive localisation',
        body: 'Interface strings, tooltips, and help guides follow your preferred language.',
      },
      support: {
        title: '24/7 support',
        body: 'Dedicated help centres in Asia, Europe, and the Americas for true local time zones.',
      },
      integrations: {
        title: 'Team integrations',
        body: 'Connect with Google Drive, Dropbox, and Slack to share work instantly.',
      },
    },
    footer: {
      tagline: 'Your everyday creative lab in the cloud.',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      copyright: '© 2024 GoTools Lab. All rights reserved.',
    },
    editorTemplates: {
      meeting:
        '# Meeting notes\n\n**Date:**\n**Attendees:**\n\n## Agenda\n- \n- \n\n## Decisions\n- \n\n## Action items\n- Owner – Due date',
      content:
        '# Content brief\n\n**Campaign:**\n**Audience:**\n\n## Key message\n\n## Format\n- Article\n- Video\n- Social\n\n## Distribution\n- Website\n- Email\n- Ads',
      todo:
        '# Action plan\n\n1. \n2. \n3. \n\n**Next review:**',
    },
    notifications: {
      copied: 'Copied to clipboard',
      saved: 'Draft saved',
      downloaded: 'File downloaded',
    },
  },
  zh: {
    branding: { title: 'GoTools 实验室' },
    navigation: {
      allTools: '所有工具',
      categories: '工具分类',
      editor: '在线编辑器',
      support: '支持服务',
      languageLabel: '语言',
      cta: '立即使用',
    },
    hero: {
      kicker: '面向创作者的一站式工具箱',
      title: '强大在线工具，分类一目了然',
      subtitle: '几秒钟完成媒体、文档与日常任务。随时切换整站语言，在任何地方保持高效。',
      primary: '体验在线编辑器',
      secondary: '浏览工具分类',
    },
    showcase: {
      media: {
        title: '媒体处理',
        body: '直接在浏览器中压缩、转换、剪辑音视频文件。',
      },
      documents: {
        title: '智能文档',
        body: '合并、签署或转换 PDF，无需上传敏感数据。',
      },
      utilities: {
        title: '实用工具',
        body: '从屏幕录制到 GIF 制作，一键启动。',
      },
    },
    search: {
      label: '搜索工具',
      placeholder: '搜索需要的工具…',
      meta: '已上线 48 款工具，输入即筛选',
    },
    categories: {
      title: '精选分类',
      subtitle: '快速找到你需要的功能。每个分类都提供统一的使用体验。',
    },
    category: {
      audio: {
        title: '音频工坊',
        description: '剪辑、混音、格式转换统统在线完成。',
      },
      video: {
        title: '视频实验室',
        description: '极速剪辑、裁剪、压缩，实时预览。',
      },
      document: {
        title: '文档中心',
        description: '安全地处理 PDF、Office 文件与扫描件。',
      },
      utility: {
        title: '效率工具集',
        description: '截图、压缩、效率小工具，轻装上阵。',
      },
    },
    tool: {
      audioTrimmer: { title: '音频剪辑', description: '精准裁剪 MP3/WAV 音频片段。' },
      audioConverter: { title: '音频转换', description: '在 MP3、WAV、FLAC 等格式间快速切换。' },
      noiseReducer: { title: '降噪助手', description: '利用智能算法消除背景噪声。' },
      videoCutter: { title: '视频剪辑', description: '秒级分割视频片段。' },
      videoCompressor: { title: '视频压缩', description: '显著减小体积，保持高清质量。' },
      subtitleMaker: { title: '字幕生成', description: '实时生成字幕并支持翻译。' },
      pdfMerge: { title: 'PDF 合并', description: '多份 PDF 一键合并。' },
      pdfSigner: { title: 'PDF 签名', description: '快速添加电子签名并记录时间戳。' },
      ocrReader: { title: 'OCR 识别', description: '识别 120+ 语言的扫描文字。' },
      screenRecorder: { title: '屏幕录制', description: '连同麦克风声音一起录制屏幕。' },
      gifMaker: { title: 'GIF 制作', description: '将视频片段转换为循环 GIF。' },
      archiveManager: { title: '压缩包管理', description: '轻松拖拽完成打包与解压。' },
    },
    highlights: {
      privacy: {
        title: '隐私优先',
        body: '文件保留在本地浏览器，尽可能在端侧完成处理。',
      },
      speed: {
        title: '极速响应',
        body: '全球 CDN 与 GPU 加速，让每个工具随时可用。',
      },
      accessibility: {
        title: '通用设计',
        body: '键盘快捷键、深色主题、多语言支持面向所有人。',
      },
    },
    editor: {
      title: '实时在线编辑器',
      subtitle: '格式化文档、实时协作、即时导出，所有改动都在浏览器内完成并自动保存。',
      welcomeTitle: '欢迎来到 GoTools 在线编辑器',
      welcomeBody: '使用工具栏进行排版、调用现成模板或即时导出，无需安装任何软件。',
      templatesTitle: '快速模板',
      templates: {
        meeting: '会议记录',
        content: '内容策划',
        todo: '执行清单',
      },
      status: '更改已本地保存',
      toolbar: {
        bold: '加粗',
        italic: '斜体',
        underline: '下划线',
        bullet: '项目符号',
        numbered: '编号列表',
        clear: '清除格式',
        download: '下载为 TXT',
        copy: '复制内容',
        theme: '切换深浅色',
      },
    },
    global: {
      title: '面向全球用户',
      subtitle: '服务覆盖 120+ 国家/地区，一键切换语言，体验保持一致。',
      localization: {
        title: '智能本地化',
        body: '界面文字、提示和帮助文档随语言变化自动调整。',
      },
      support: {
        title: '7×24 支持',
        body: '亚洲、欧洲、美洲均设有支持中心，跨时区无忧。',
      },
      integrations: {
        title: '团队协同',
        body: '与 Google Drive、Dropbox、Slack 无缝连接。',
      },
    },
    footer: {
      tagline: '云端的日常创作实验室。',
      privacy: '隐私政策',
      terms: '使用条款',
      contact: '联系我们',
      copyright: '© 2024 GoTools Lab. 版权所有。',
    },
    editorTemplates: {
      meeting:
        '# 会议记录\n\n**时间：**\n**参会人：**\n\n## 议程\n- \n- \n\n## 决议\n- \n\n## 待办事项\n- 负责人 – 截止日期',
      content:
        '# 内容策划\n\n**项目：**\n**目标人群：**\n\n## 核心信息\n\n## 内容形式\n- 文章\n- 视频\n- 社媒\n\n## 发布渠道\n- 网站\n- 邮件\n- 广告',
      todo: '# 执行清单\n\n1. \n2. \n3. \n\n**下次跟进：**',
    },
    notifications: {
      copied: '内容已复制',
      saved: '草稿已保存',
      downloaded: '文件已下载',
    },
  },
  es: {
    branding: { title: 'Laboratorio GoTools' },
    navigation: {
      allTools: 'Todas las herramientas',
      categories: 'Categorías',
      editor: 'Editor en línea',
      support: 'Soporte',
      languageLabel: 'Idioma',
      cta: 'Empezar',
    },
    hero: {
      kicker: 'Una caja de herramientas para cada creador',
      title: 'Potentes utilidades en línea con categorías claras',
      subtitle:
        'Resuelve tareas de medios, documentos y productividad en segundos. Cambia todo el sitio a tu idioma preferido y mantente productivo donde estés.',
      primary: 'Probar el editor en línea',
      secondary: 'Explorar categorías',
    },
    showcase: {
      media: {
        title: 'Conversión multimedia',
        body: 'Comprime, convierte y recorta audio o video directamente en el navegador.',
      },
      documents: {
        title: 'Documentos inteligentes',
        body: 'Combina, firma o transforma PDFs sin subir datos sensibles.',
      },
      utilities: {
        title: 'Utilidades rápidas',
        body: 'De grabadores de pantalla a creadores de GIF, abre una herramienta con un clic.',
      },
    },
    search: {
      label: 'Buscar herramientas',
      placeholder: 'Busca una herramienta…',
      meta: '48 herramientas y creciendo — escribe para filtrar',
    },
    categories: {
      title: 'Categorías seleccionadas',
      subtitle:
        'Accede de inmediato al conjunto que necesitas. Cada categoría agrupa herramientas enfocadas con interfaces consistentes.',
    },
    category: {
      audio: {
        title: 'Estudio de audio',
        description: 'Recorta, mezcla y convierte formatos de audio sin salir del navegador.',
      },
      video: {
        title: 'Laboratorio de video',
        description: 'Edita, redimensiona y comprime videos con vistas previas veloces.',
      },
      document: {
        title: 'Centro de documentos',
        description: 'Transforma de forma segura PDFs, archivos Office y escaneos.',
      },
      utility: {
        title: 'Utilidades diarias',
        description: 'Herramientas ligeras para capturas, archivos y productividad.',
      },
    },
    tool: {
      audioTrimmer: {
        title: 'Recortador de audio',
        description: 'Corta clips MP3 o WAV con precisión en línea.',
      },
      audioConverter: {
        title: 'Convertidor de audio',
        description: 'Cambia entre MP3, WAV, FLAC y más al instante.',
      },
      noiseReducer: {
        title: 'Reductor de ruido',
        description: 'Limpia el ruido de fondo con suavizado inteligente.',
      },
      videoCutter: {
        title: 'Cortador de video',
        description: 'Divide videos en escenas en segundos.',
      },
      videoCompressor: {
        title: 'Compresor de video',
        description: 'Reduce el tamaño sin perder claridad HD.',
      },
      subtitleMaker: {
        title: 'Generador de subtítulos',
        description: 'Genera subtítulos con traducciones en vivo.',
      },
      pdfMerge: {
        title: 'Unir PDF',
        description: 'Combina múltiples PDFs en un solo archivo.',
      },
      pdfSigner: {
        title: 'Firmar PDF',
        description: 'Añade firmas con sellos de tiempo válidos.',
      },
      ocrReader: {
        title: 'Lector OCR',
        description: 'Extrae texto de escaneos en más de 120 idiomas.',
      },
      screenRecorder: {
        title: 'Grabador de pantalla',
        description: 'Captura la pantalla con audio del micrófono.',
      },
      gifMaker: {
        title: 'Creador de GIF',
        description: 'Crea GIFs en bucle desde cualquier clip de video.',
      },
      archiveManager: {
        title: 'Gestor de archivos',
        description: 'Comprime y descomprime con arrastrar y soltar.',
      },
    },
    highlights: {
      privacy: {
        title: 'Flujo centrado en la privacidad',
        body: 'Tus archivos permanecen en el navegador. El procesamiento ocurre localmente cuando es posible.',
      },
      speed: {
        title: 'Optimizado para velocidad',
        body: 'CDNs globales y aceleración GPU mantienen todo listo al instante.',
      },
      accessibility: {
        title: 'Diseño inclusivo',
        body: 'Atajos de teclado, modo oscuro y traducciones aseguran una experiencia universal.',
      },
    },
    editor: {
      title: 'Editor en línea en vivo',
      subtitle:
        'Da formato a documentos, colabora en tiempo real y exporta de inmediato. Todos los cambios se guardan en tu navegador automáticamente.',
      welcomeTitle: 'Bienvenido al editor de GoTools Lab',
      welcomeBody:
        'Usa la barra de herramientas para dar estilo al texto, cargar plantillas o exportar tu documento sin instalar programas.',
      templatesTitle: 'Plantillas rápidas',
      templates: {
        meeting: 'Notas de reunión',
        content: 'Brief de contenido',
        todo: 'Plan de acción',
      },
      status: 'Cambios guardados localmente',
      toolbar: {
        bold: 'Negrita',
        italic: 'Cursiva',
        underline: 'Subrayado',
        bullet: 'Viñetas',
        numbered: 'Lista numerada',
        clear: 'Limpiar formato',
        download: 'Descargar TXT',
        copy: 'Copiar al portapapeles',
        theme: 'Cambiar tema',
      },
    },
    global: {
      title: 'Creado para un público global',
      subtitle:
        'Colaboramos con equipos de más de 120 países. Cambia de idioma con un clic y conserva el mismo diseño intuitivo.',
      localization: {
        title: 'Localización adaptable',
        body: 'Textos, ayudas y mensajes siguen tu idioma preferido.',
      },
      support: {
        title: 'Soporte 24/7',
        body: 'Centros de ayuda en Asia, Europa y América para cubrir todos los husos horarios.',
      },
      integrations: {
        title: 'Integraciones de equipo',
        body: 'Conecta con Google Drive, Dropbox y Slack para compartir al instante.',
      },
    },
    footer: {
      tagline: 'Tu laboratorio creativo diario en la nube.',
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      copyright: '© 2024 GoTools Lab. Todos los derechos reservados.',
    },
    editorTemplates: {
      meeting:
        '# Notas de reunión\n\n**Fecha:**\n**Asistentes:**\n\n## Agenda\n- \n- \n\n## Decisiones\n- \n\n## Tareas\n- Responsable – Fecha límite',
      content:
        '# Brief de contenido\n\n**Campaña:**\n**Audiencia:**\n\n## Mensaje clave\n\n## Formato\n- Artículo\n- Video\n- Social\n\n## Distribución\n- Sitio web\n- Email\n- Anuncios',
      todo: '# Plan de acción\n\n1. \n2. \n3. \n\n**Próxima revisión:**',
    },
    notifications: {
      copied: 'Copiado al portapapeles',
      saved: 'Borrador guardado',
      downloaded: 'Archivo descargado',
    },
  },
};

const languageSelect = document.getElementById('language');
const searchInput = document.getElementById('search-input');
const editorCanvas = document.getElementById('editor-canvas');
const body = document.body;

const SUPPORTED_LANGS = Object.keys(translations);
const STORAGE_KEYS = {
  language: 'gotools-language',
  draft: 'gotools-editor-draft',
  theme: 'gotools-theme',
};
let lastSaveToast = 0;

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Storage unavailable', error);
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Storage unavailable', error);
  }
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function applyTranslations(lang) {
  const bundle = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const translation = getNestedTranslation(bundle, key);
    if (translation) {
      node.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    const translation = getNestedTranslation(bundle, key);
    if (translation && 'placeholder' in node) {
      node.placeholder = translation;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((node) => {
    const key = node.getAttribute('data-i18n-title');
    const translation = getNestedTranslation(bundle, key);
    if (translation) {
      node.title = translation;
      node.setAttribute('aria-label', translation);
    }
  });

  // Update static values that are not purely text nodes
  const statusText = getNestedTranslation(bundle, 'editor.status');
  if (statusText) {
    const statusNode = document.querySelector('.editor-status p');
    if (statusNode) statusNode.textContent = statusText;
  }

  // Save chosen language
  safeSet(STORAGE_KEYS.language, lang);

  if (!safeGet(STORAGE_KEYS.draft)) {
    setEditorWelcome(lang);
  }
}

function applyTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
  safeSet(STORAGE_KEYS.theme, mode);
}

function initTheme() {
  const stored = safeGet(STORAGE_KEYS.theme);
  if (stored === 'dark' || stored === 'light') {
    applyTheme(stored);
    return;
  }
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

function detectLanguage() {
  const stored = safeGet(STORAGE_KEYS.language);
  if (stored && SUPPORTED_LANGS.includes(stored)) {
    return stored;
  }
  const navigatorLang = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGS.includes(navigatorLang) ? navigatorLang : 'en';
}

function initLanguage() {
  const lang = detectLanguage();
  languageSelect.value = lang;
  applyTranslations(lang);
}

languageSelect.addEventListener('change', (event) => {
  applyTranslations(event.target.value);
});

function filterTools(value) {
  const cards = document.querySelectorAll('.tool-card');
  const query = value.toLowerCase();
  cards.forEach((card) => {
    const keywords = card.dataset.keywords || '';
    const text = card.textContent.toLowerCase();
    const match = keywords.toLowerCase().includes(query) || text.includes(query);
    card.classList.toggle('is-hidden', !match);
  });
}

searchInput.addEventListener('input', (event) => {
  filterTools(event.target.value);
});

function applyTemplate(templateKey) {
  const currentLang = languageSelect.value;
  const template = translations[currentLang]?.editorTemplates?.[templateKey];
  if (template) {
    editorCanvas.innerText = template;
    saveDraft();
  }
}

function setEditorWelcome(lang) {
  if (!editorCanvas) return;
  const bundle = translations[lang] || translations.en;
  const title = bundle.editor?.welcomeTitle || '';
  const body = bundle.editor?.welcomeBody || '';
  editorCanvas.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
}

function saveDraft(options = {}) {
  if (!editorCanvas) return;
  const { silent = false } = options;
  safeSet(STORAGE_KEYS.draft, editorCanvas.innerHTML);
  const now = Date.now();
  if (!silent && now - lastSaveToast > 5000) {
    showToast('notifications.saved');
    lastSaveToast = now;
  }
}

function restoreDraft() {
  if (!editorCanvas) return;
  const saved = safeGet(STORAGE_KEYS.draft);
  if (saved) {
    editorCanvas.innerHTML = saved;
  } else {
    setEditorWelcome(languageSelect.value);
  }
}

function showToast(key) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  const message = getNestedTranslation(translations[languageSelect.value] || translations.en, key);
  toast.textContent = message || key;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 1800);
}

function setupEditor() {
  document.querySelectorAll('[data-command]').forEach((button) => {
    button.addEventListener('click', () => {
      const command = button.getAttribute('data-command');
      document.execCommand(command, false, null);
      saveDraft({ silent: true });
    });
  });

  document.querySelectorAll('[data-template]').forEach((button) => {
    button.addEventListener('click', () => {
      applyTemplate(button.dataset.template);
    });
  });

  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'download') {
        const blob = new Blob([editorCanvas.innerText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'gotools-document.txt';
        link.click();
        URL.revokeObjectURL(url);
        showToast('notifications.downloaded');
      }

      if (action === 'copy') {
        if (navigator.clipboard?.writeText) {
          navigator.clipboard
            .writeText(editorCanvas.innerText)
            .then(() => showToast('notifications.copied'))
            .catch(() => showToast('notifications.copied'));
        } else {
          const helper = document.createElement('textarea');
          helper.value = editorCanvas.innerText;
          helper.setAttribute('readonly', '');
          helper.style.position = 'fixed';
          helper.style.opacity = '0';
          document.body.appendChild(helper);
          helper.select();
          try {
            document.execCommand('copy');
            showToast('notifications.copied');
          } finally {
            helper.remove();
          }
        }
      }

      if (action === 'darkmode') {
        const next = body.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
      }
    });
  });

  editorCanvas.addEventListener('input', () => {
    saveDraft({ silent: true });
  });
}

function enhanceAccessibility() {
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && el.tagName === 'BUTTON') {
        el.click();
      }
    });
  });
}

function init() {
  initTheme();
  initLanguage();
  restoreDraft();
  setupEditor();
  enhanceAccessibility();

  // initial filter state (clear hidden classes)
  filterTools('');
}

document.addEventListener('DOMContentLoaded', init);
