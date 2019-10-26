export interface IGalleryItem {
  id: number;
  name: string;
  src: string;
  size: string;
  shop: boolean;
}

export interface ModalItem {
  id: number;
  desc: string;
}

// large wide wide small small tall tall

export const galleryData = [
  { id: 0, name: "choose life", src: "thumbs-022.jpg", size: "large", shop: false },
  { id: 1, name: "desert eyes", src: "thumbs-002.jpg", size: "wide", shop: false },
  { id: 2, name: "bardo pond", src: "thumbs-003.jpg", size: "wide", shop: false },
  { id: 3, name: "angled pike", src: "thumbs-004.jpg", size: "small", shop: false },
  { id: 4, name: "mission of burma", src: "thumbs-005.jpg", size: "small", shop: false },
  { id: 5, name: "mushroomjack", src: "thumbs-021.jpg", size: "tall", shop: true },
  { id: 6, name: "folläkzoid", src: "thumbs-007.jpg", size: "tall", shop: false },
  { id: 7, name: "patterned butterfly", src: "thumbs-015.jpg", size: "large", shop: true },
  { id: 8, name: "angler fish", src: "thumbs-009.jpg", size: "wide", shop: false },
  { id: 9, name: "patterned bug", src: "thumbs-010.jpg", size: "wide", shop: true },
  { id: 10, name: "you mug", src: "thumbs-011.jpg", size: "small", shop: false },
  { id: 11, name: "mutant bmx", src: "thumbs-012.jpg", size: "small", shop: false },
  { id: 12, name: "nf fly", src: "thumbs-013.jpg", size: "tall", shop: false },
  { id: 13, name: "desert smoker", src: "thumbs-014.jpg", size: "tall", shop: true },
  { id: 14, name: "robot workshop", src: "thumbs-008.jpg", size: "large", shop: true },
  { id: 15, name: "dylan carlson", src: "thumbs-016.jpg", size: "wide", shop: false },
  { id: 16, name: "octopsss", src: "thumbs-017.jpg", size: "wide", shop: false },
  { id: 17, name: "collapse", src: "thumbs-018.jpg", size: "small", shop: false },
  { id: 18, name: "rat race", src: "thumbs-019.jpg", size: "small", shop: false },
  { id: 19, name: "papa m house", src: "thumbs-020.jpg", size: "tall", shop: false },
  { id: 20, name: "bass overload", src: "thumbs-006.jpg", size: "tall", shop: false },
  { id: 21, name: "leaf insect", src: "thumbs-001.jpg", size: "large", shop: false },
  { id: 22, name: "crab man", src: "thumbs-023.jpg", size: "wide", shop: false },
  { id: 23, name: "tree man", src: "thumbs-024.jpg", size: "large", shop: false },
  { id: 24, name: "cosmic tree", src: "thumbs-025.jpg", size: "small", shop: false },
  { id: 25, name: "stump creep", src: "thumbs-026.jpg", size: "small", shop: false },
  { id: 26, name: "tree head", src: "thumbs-027.jpg", size: "wide", shop: false },
];

export const modalInfo = [
  { id: 0, desc: "The result of working in an office for too long. Made using ink, brush and pigment ink pens." },
  { id: 1, desc: "Part of my desert tryptich illustration. Pen and ink drawings coloured using mixed media and finished on Photoshop." },
  { id: 2, desc: "Gig poster for american space rock band Bardo Pond. Created for Room237 promotions using pen and ink, coloured using Photoshop." },
  { id: 3, desc: "An angular pike drawn for Wharf Chambers gig Man Forever. Pen and ink coloured using Photoshop." },
  { id: 4, desc: "Gig poster for legendary post punk band Mission Burma gig. created for Room237 and Brudenell Social Club. Created using pen and ink and coloured on Photoshop and Illustrator." },
  { id: 5, desc: "Mushroom lumberjack detailed illustration. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper. This is a available to buy in screenprint form." },
  { id: 6, desc: "Gig poster for Chilean space rock band Föllakzoid produced for Third Eye and Karma promotions. Created using pen and ink, coloured pencil and Photoshop" },
  { id: 7, desc: "Butterfly illustration created using pen and ink, coloured on illustrator. Screenprints available to buy 5 colours on heavy duty paper." },
  { id: 8, desc: "Computer illustrated picture of an deep sea Angler Fish. Created using Adobe Illustrator and Photoshop." },
  { id: 9, desc: "Beetle illustration created using pen and ink, coloured on illustrator. Screenprints available to buy 5 colours on heavy duty paper." },
  { id: 10, desc: "Comedy mug illustration computer drawn. This was made using Adobe Illustrator and Photoshop. " },
  { id: 11, desc: "A crazy hand drawn illustration of a mutant riding a BMX. Created using water colour and ink" },
  { id: 12, desc: "Debut gig poster for Leeds based gig promoters Northern Flowerhouse. Hand drawn illustration texture and colour done with Photoshop." },
  { id: 13, desc: "Part of my desert tryptich illustration. Pen and ink drawings coloured using mixed media and finished on Photoshop." },
  { id: 14, desc: "Hand drawn illustration of a robot being built. This was exhibited at North Bar for an exhibition titled 'Under Construction'. Created using pigment pens and water colour. Giclee prints on art paper available to buy." },
  { id: 15, desc: "Gig poster for drone legend Dylan Carlson, created for Room237. Created using pen and ink and coloured on Photoshop and Illustrator." },
  { id: 16, desc: "Computer illustrated picture of an Octopussssss. Created using Adobe Illustrator and Photoshop." },
  { id: 17, desc: "Hand drawn illustration of head collapsing together in a circle with varying degrees of torment. Created using pen and ink" },
  { id: 18, desc: "Computer illustrated picture of a rat working in the rat race. Created using Adobe Illustrator and Photoshop." },
  { id: 19, desc: "Gig poster for Slint legend Papa M, created for Room237. Created using Photoshop and Illustrator. I have massive screen printed posters of this for sale" },
  { id: 20, desc: "Computer illustrated picture of what happens with too much bass. Created using Adobe Illustrator and Photoshop." },
  { id: 21, desc: "Another gig poster for Leeds based gig promoters Northern Flowerhouse. This time featuring a leaf insect. Created using Illustrator and Photoshop." },
  { id: 22, desc: "Crazy crab military bird nest something or other man illustration. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper." },
  { id: 23, desc: "Hand drawn illustration of a colourful tree man. Created using pigment pens and water colour." },
  { id: 24, desc: "Hand drawn detailed illustration of cosmic creature living a tree stump. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper." },
  { id: 25, desc: "Hand drawn illustration of a creepy dude living in a tree stump. Created using pen, ink and watercolours." },
  { id: 26, desc: "Hand drawn illustration of a guy with a tree stump growing from his head. Created using pen, ink and colouring pencils." },
];