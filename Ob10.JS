let personal = {
    name : "Kyi Thar Oo",
    age :19,
    phone :09421090659,
    address :" Yangon",
    family :["Father","Mother","Brother"],
    like :{
        color:"blue",
        place:"Bagan",
    },
    doIt: function(){
        console.log(this.name + " likes "+ this.like.color);
    }
}
let json=JSON.stringify(personal);
let obj=JSON.parse(json);
console.log(personal.name)
