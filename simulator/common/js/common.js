$(function () {
    rendering();

    $(".sell-btn").on("click", function () {
        sell();
    });

    $(".enchant-btn3").on("click", function () {
        enchant();
    });
});
// 이름, 등급, 강화보장, 강화단계, 강화내구도, 강화확률
var weaponList = [  
    { name: "예리한 삼촉현선", rank: "[희귀]", guarantee: "+3", reinforced: 0, durability: 3, chance: 100, cost: 1200},
    { name: "예리한 가시철단도", rank: "[희귀]", guarantee: "+5", reinforced: 0, durability: 3, chance: 100, cost: 1200 },
];

var enchantCost = [
    { reinforced: 0, cost: 1000, sheet: 6,secret: 5, accelerator:5, stabilizer:4}
]

var user = {
    weapon: 0,
    money: 10000000,
    enchant_sheet: 459,
    enchant_secret: 14,
    accelerator: 10,
    stabilizer: 9,
};

function rendering() {
    $(".cost .value").text(comma(weaponList[user.weapon].cost));
    $(".money .value").text(comma(user.money));
    $(".price .value").text(comma(weaponList[user.weapon].price));
    $(".chance .value").text(weaponList[user.weapon].chance);
    $(".enc_name .name").text(weaponList[user.weapon].name);
    $(".enc_name .rank").text(weaponList[user.weapon].rank);
    $(".enc_tb .reinforced_a").text(weaponList[user.weapon].reinforced);
    $(".enc_tb .reinforced_b").text(weaponList[user.weapon].reinforced + 1);
    $(".enc_tb .chance").text(weaponList[user.weapon].chance);
    $(".enc_1 .guarantee").text(weaponList[user.weapon].guarantee);
    $(".enc_tb1 .enchant_sheet").text(user.enchant_sheet);
    $(".material_add .enchant_secret").text(user.enchant_secret);
    $(".material_add .accelerator").text(user.accelerator);
    $(".material_add .stabilizer").text(user.stabilizer);
}

function comma(s) {
    return String(s).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function enchant() {
    if (user.money >= weaponList[user.weapon].cost) {
        user.money -= weaponList[user.weapon].cost
        if (chance(weaponList[user.weapon].chance)) {
            user.weapon++;
        } else {
            user.weapon = 0;
        }

        rendering();
    } else {
        alert("돈이 부족합니다.");
    }
}

function chance(percent) {
    if (Math.floor(Math.random() * 100) + 1 <= percent)
        return true;
    else
        return false;
}