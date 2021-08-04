ÖDEV:
Yukarıda bulunan renk paletlerine tıklanıldığında .result-box elementinin rengini tıklanılan palete göre değiştirecek Vue uygulamasını yazınız.
When clicking on the color palettes above, write the Vue application that will change the color of the .result-box element according to the clicked palette.

İPUCU:
data içerisinde yer alan color_palette isimli Array türündeki bir property üzerinden, .css--palette elementinin içinde bulunan li elementlerini v-for ile döndürün.
<li> elementine click eventi yardımıyla .result-box isimli elementin alacağı rengi class binding ile yapabilirsiniz.
"red-box", "green-box", "blue-box" isimli css class'larını tanımlamanız gerekmektedir.

iterate the li elements in the .css - palette element with v-for over a property of type Array named color_palette in the data.
With the help of the click event on the <li> element, you can make the color of the element named .result-box with the class binding.
You should define css classes named "red-box", "green-box", "blue-box"

Sample Data:
color_palette = [
    {
        id: "red",
        css_class: "red-box",
    },
    {
        id: "green",
        css_class: "green-box",
    },
    {
        id: "blue",
        css_class: "blue-box",
    }
];