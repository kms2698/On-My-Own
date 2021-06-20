$(function () {
    rendering();

    $(".sell-btn").on("click", function () {
        sell();
    });

    $(".enchant-btn3").on("click", function () {
        enchant();
    });
});
// 강화단계, 이름, 등급, 강화보장, 강화내구도, 강화확률, 최소파괴력, 최대파괴력, 피해저항관통
var weaponList = [  
    { reinforced: 0, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 10700, max: 13500, pierce: 0 },
    { reinforced: 1, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 14000, max: 19000, pierce: 0 },
    { reinforced: 2, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 17300, max: 24500, pierce: 0 },
    { reinforced: 3, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 90, cost: 1200, min: 20600, max: 30000, pierce: 120 },
    { reinforced: 4, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 80, cost: 1200, min: 23900, max: 35500, pierce: 120 },
    { reinforced: 5, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 70, cost: 1200, min: 27200, max: 41000, pierce: 120 },
    { reinforced: 6, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 60, cost: 1200, min: 30500, max: 46500, pierce: 195 },
    { reinforced: 7, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 50, cost: 1200, min: 33800, max: 52000, pierce: 195 },
    { reinforced: 8, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 40, cost: 1200, min: 37100, max: 57500, pierce: 195 },
    { reinforced: 9, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 30, cost: 1200, min: 40400, max: 63000, pierce: 290 },
    { reinforced: 10, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 20, cost: 1200, min: 43700, max: 68500, pierce: 290 },
    { reinforced: 11, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 15, cost: 1200, min: 47000, max: 74000, pierce: 375 },
    { reinforced: 12, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 12, cost: 1200, min: 50300, max: 79500, pierce: 375 },
    { reinforced: 13, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 10, cost: 1200, min: 53600, max: 85000, pierce: 465 },
    { reinforced: 14, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 7, cost: 1200, min: 56900, max: 90500, pierce: 465 },
    { reinforced: 15, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 60200, max: 96000, pierce: 555 },
    { reinforced: 16, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 63500, max: 101500, pierce: 565 },
    { reinforced: 17, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 66800, max: 106000, pierce: 600 },
    { reinforced: 18, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 70100, max: 112500, pierce: 600 },
    { reinforced: 19, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 73400, max: 118000, pierce: 640 },
    { reinforced: 20, name: "청일기창", rank: "[전설]", guarantee: "+3", durability: 3, chance: 100, cost: 1200, min: 76700, max: 123500, pierce: 735 },

];

var enchantCost = [
    { reinforced: 0, cost: 1000, sheet: 6,secret: 5, accelerator:5, stabilizer:4}
]

var user = {
    weapon: 0,
    money: 14003420,
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
    $(".enc_tb2 .chance").text(weaponList[user.weapon].chance);
    $(".enc_1 .guarantee").text(weaponList[user.weapon].guarantee);
    $(".enc_tb1 .enchant_sheet").text(user.enchant_sheet);
    $(".material_add .enchant_secret").text(user.enchant_secret);
    $(".material_add .accelerator").text(user.accelerator);
    $(".material_add .stabilizer").text(user.stabilizer);
    $(".inven .money").text(comma(user.money));
    $(".enchant-btn3 .cost").text(comma(weaponList[user.weapon].cost));
    $(".reinforced_main .reinforced_a1").text(comma(weaponList[user.weapon].min));
    $(".reinforced_main .reinforced_a2").text(comma(weaponList[user.weapon].max));
    $(".reinforced_main .reinforced_a3").text(comma(weaponList[user.weapon].pierce));
    $(".reinforced_main .reinforced_b1").text(comma(weaponList[user.weapon+1].min));
    $(".reinforced_main .reinforced_b2").text(comma(weaponList[user.weapon+1].max));
    $(".reinforced_main .reinforced_b3").text(comma(weaponList[user.weapon+1].pierce));

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
            user.weapon--;
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