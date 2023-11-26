
valparaiTxt = "It is a hill station situated 102 km away from Coimbatore. Valparai is the head of 50 estates that fall under the Anamalai range. Tea plantation is predominantly present. Anamalai range also has a number of waterfalls, stream, dams and dense forests.";

kothagiriTxt = "This hill station is the oldest and most ancient hill resort lying in the Nilgiri hills. Kotagiri is situated at an elevation of around 1793m above sea level and is one of the three popular hill stations located in the Nilgiris. It is located at a distance of 105 km from Coimbatore.";

siruvaniTxt = "This place acts as a perfect picnic spot with its waterfalls and dam. Siruvani is the source of water supply to the entire district of Coimbatore. This water supplied is considered the second tastiest water of the world. It lies at a distance of 37 km from Coimbatore.";

tirumalaiTxt = "Like the hill temple in Tirumala-Tirupati in Andhra pradesh, the THEN-THIRUMALA temple,Coimbatore,in Tamilnadu is located on a natural hill formation amidst sylvian surroundings at an elevation of about 1000 ft. above MSL.";

ootyTxt = "Ootachamand is called the 'Queen of hills'. In the English language, it is called Udhagamandalam. Ooty is a favorite tourist spot among people because of its low lying clouds, cool weather natural beauty. It also houses tourist spots such as Botanical Gardens, Ooty Lake and Stone House. Although, it lies at some distance from the city of Coimbatore, it is a place that commands a must visit.";

dhyanalingamTxt = "It is a unique yogic temple, beyond any particular faith and believes in spiritual essence of living. They don't follow any special kind of prayer or ritual. They only believe in meditation and provide you with a serene and spiritual ambiance in the midst of dense forest, essentially at the foothills of Velliangiri Mountains, It is around 30 km from west of Coimbatore and approximately 20km away from Siruvani.";

monkeyfallsTxt = "This is one of the picturesque waterfalls popular in Coimbatore district. It is located in the Anaimalai Hills range. You can reach there through Pollachi-Valparai road. It is about 30 km away from Pollachi, just next to two IFS check posts - AzhiyarValparai and Arutperunjothi Nagar. It has come up as one of the most popular tourist attractions around 30 km from Coimbatore.";

nilgirisTxt =  "Nilgiris is India's first biosphere that ranks among the 14 'hotspots' of the world. It is among the oldest mountain ranges in India and a home to three beautiful hill stations - Coonoor, Ooty, and Kotagiri. You will find all aspects of nature interspersed with each other in this heavenly abode. Waterfalls, tea plantations, rolling grasslands and spectacular viewpoints define the beauty of Nilgiri Hills.";

function valparai() {
    document.getElementById("content").innerHTML = "<h3>Valparai</h3><p>" + valparaiTxt + "</p>";
}
function kothagiri() {
    document.getElementById("content").innerHTML = "<h3>Kothagiri</h3><p>" + kothagiriTxt + "</p>";
}
function siruvani() {
    document.getElementById("content").innerHTML = "<h3>Siruvani Water Falls</h3><p>" + siruvaniTxt + "</p>";
}
function tirumalai() {
    document.getElementById("content").innerHTML = "<h3>Then Tirumalai</h3><p>" + tirumalaiTxt + "</p>";
}
function ooty() {
    document.getElementById("content").innerHTML = "<h3>Ooty</h3><p>" + ootyTxt + "</p>";
}
function dhyanalingam() {
    document.getElementById("content").innerHTML = "<h3>Dhyanalingam</h3><p>"  + dhyanalingamTxt + "</p>";
}
function monkeyfalls() {
    document.getElementById("content").innerHTML = "<h3>Monkey Falls</h3><p>"  + monkeyfallsTxt + "</p>";
}
function nilgiris() {
    document.getElementById("content").innerHTML = "<h3>Nilgiris</h3><p>"  + nilgirisTxt + "</p>";
}
function msg(n) {
    alert("Here at : " + n);
}

