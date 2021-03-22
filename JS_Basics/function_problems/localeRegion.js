function extractRegion (language) {
    console.log(language.slice(3, 5));
    return language.slice(3, 5);
}

extractRegion('en_US.UTF-8');  // 'en'
extractRegion('en_GB.UTF-8');  // 'en'
extractRegion('ko_KR.UTF-16'); // 'ko'