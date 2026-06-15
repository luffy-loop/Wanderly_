/** Verified travel image URLs from Unsplash, Pexels, and Pixabay. */

const unsplash = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

const pexels = (id, w = 800, h = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const TRAVEL_IMAGES = {
  fallback: unsplash("1469474968028-56623f02e42e"),
  hero: unsplash("1469474968028-56623f02e42e", 1920, 600),
  destinations: {
    goa: unsplash("1559827260-dc66d52bef19"),
    kerala: pexels("1001682"),
    rajasthan: unsplash("1477587458883-47145ed94245"),
    manali: unsplash("1626621341517-bbf3d9990a23"),
    udaipur: unsplash("1599661046289-e31897846e41"),
    andaman: unsplash("1544551763-46a013bb70d5"),
    kashmir: pexels("417173"),
  },
  hotels: {
    mumbai: unsplash("1566073771259-6a8506099945"),
    delhi: unsplash("1582719508461-905c673771fd"),
    chennai: unsplash("1564501049412-61c2a3083791"),
    bangalore: unsplash("1520250497591-112f2f40a3f4"),
    goa: unsplash("1571896349842-33c89424de2d"),
    kolkata: unsplash("1542314831-068cd1dbfeeb"),
  },
  blogs: {
    southIndia: pexels("1001682"),
    budget: unsplash("1469854523086-cc02fe5d8800"),
    goaGuide: unsplash("1559827260-dc66d52bef19"),
  },
};

const DESTINATION_ALIASES = {
  goa: "goa",
  kerala: "kerala",
  rajasthan: "rajasthan",
  jaipur: "rajasthan",
  manali: "manali",
  udaipur: "udaipur",
  andaman: "andaman",
  "andaman & nicobar": "andaman",
  kashmir: "kashmir",
  srinagar: "kashmir",
  ladakh: "kashmir",
};

export function getDestinationImage(name) {
  const key = DESTINATION_ALIASES[name?.toLowerCase?.() ?? ""];
  return key ? TRAVEL_IMAGES.destinations[key] : TRAVEL_IMAGES.fallback;
}

export function getTravelImage(src) {
  return src || TRAVEL_IMAGES.fallback;
}
