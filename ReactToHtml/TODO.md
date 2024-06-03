1. Link Css files via import
   2.Fuctional Componenet to reader the charateter cards.
2. Class Componet to render the styles and content

From dataArray
const card1 =data[0];

<!--**needs these keys from each card-->
<!--++card1.name-->
<!--++card1.nickName-->
<!--++card1.imageUrl-->
<!--++card1.background-->

const card2 =data[1];
const card3 =data[2];
const card4 =data[3];
const card5 =data[4];
const card6 =data[5];
const card7 =data[6];
const card8 =data[7];
const card9 =data[8];

function App(){
return (

<card1/>
<card2/>

)

}

//Need to be able to update the variables props/keys in the App() to pull data from the data array for each card.
//<card2/>
//<card2 name='card2.name nickName= card2.nickName('/>
Which is basically
//<card2 name='data[1].name nickName= data[1].nickName />
