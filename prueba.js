const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

const imgsRef = []

catList.forEach((cat) => imgsRef.push({[cat.id]: cat.imageUrl}))


console.log(imgsRef); 

