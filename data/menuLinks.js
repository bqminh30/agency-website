const getMenuLinks = (language = "vi") => {
  if (language === "en") {
    return [
      { name: "Home", to: "#hero-section", id: 1 },
      { name: "About Us", to: "#about-us", id: 2 },
      { name: "Our Works", to: "#our-works", id: 3 },
      { name: "Contact", to: "#contact-us", id: 4 },
    ];
  }

  return [
    { name: "Trang chủ", to: "#hero-section", id: 1 },
    { name: "Giới thiệu", to: "#about-us", id: 2 },
    { name: "Dự án", to: "#our-works", id: 3 },
    { name: "Liên hệ", to: "#contact-us", id: 4 },
  ];
};

export default getMenuLinks;
