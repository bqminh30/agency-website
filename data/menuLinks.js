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
    { name: "Trang chu", to: "#hero-section", id: 1 },
    { name: "Gioi thieu", to: "#about-us", id: 2 },
    { name: "Du an", to: "#our-works", id: 3 },
    { name: "Lien he", to: "#contact-us", id: 4 },
  ];
};

export default getMenuLinks;
