export function FormatMoney(money: number): string {

    return money.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    }) + " USD";
}

export function FormatDate(date: Date): string {

    return date.toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: 'numeric'
    })
}


export function GetNewId(): string {

    const characters: (string | number)[] = ['a', 'e', 'i', 'o', 'u', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let id = "";

    for (let i = 1; i < 16; i++) {

        const random: number = Math.floor(Math.random() * characters.length);

        if (i % 4 == 0) {
            id += "-";
        }

        id += characters[random]
    }

    return id;
}