function extractLanguage (language) {
    console.log(language.slice(0, 2));
    return language.slice(0, 2);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'