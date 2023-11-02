
/* Media class */
class Media {
    constructor(title, pubYear, value) {
        this.id = Math.floor(Math.random() * 999);
        this.title = title;
        this.value = value;
        this.pubYear = pubYear;

    }
}

/* Book class */
class Book extends Media {
    constructor(title, value, pubYear, author, genre) {

        super(title, pubYear, value);

        this["Author"] = author;
        this["Genre"] = genre;
    }
}

/* DVD class */
class DVD extends Media {
    constructor(title, pubYear, value, director, runtime) {
        super(title, pubYear, value);
        this["Director"] = director;
        this["Runtime"] = runtime;
    }
}

/* CD class */
class CD extends Media {
    constructor(title, pubYear, value, artist, numTracks) {
        super(title, pubYear, value);
        this["Artist"] = artist;
        this["Number of Tracks"] = numTracks;
    }
}

/* Catalog class */
class Catalog {
    constructor() {
        this.availableLog = [];
    }
    addItem(...item) {
        this.availableLog.push(...item);
    }
    removeItem(id) {
        console.log(id);

        // remove from this.catalog by id
        for (const media in this.availableLog) {
            if (Object.hasOwnProperty.call(this.availableLog, media)) {
                console.log(median);
                const element = this.availableLog[media];
                if (element.id === id) {
                    console.log(element);
                    console.log(this.availableLog);
                    this.availableLog.pop(element)
                    console.log(this.availableLog);
                    console.log(this.availableLog);
                }
            }
        }


        this.displayCatalog(entireLog[1]);
    }
    totalValue() {
        // calculate and return the total value of all the catalog items.
        let allValues = [];
        this.availableLog.filter(function (object) {
            allValues.push(object['value'])
        })
        var totalSum = allValues.reduce(function (sum, nxtVal) {
            sum += nxtVal;
            return sum;
        })
        let cashVal = Math.floor(totalSum * 100) / 100
        return cashVal;
    }

    getDetails(item) {
        let detailKeys = [];
        for (const key of Object.keys(item)) {
            if (key == "id" || key == "value" || key == "title" || key == "pubYear") {

            } else {
                detailKeys.push(key);
            }
        }

        for (let i = 0; i < detailKeys.length; i++) {
            const detailTitle = detailKeys[i];
            let detailName = item[detailTitle];

            let detail = `${detailTitle}: ${detailName}`;
            console.log(detail);
        }
        let creatorTitle = detailKeys[0];
        let creatorName = item[creatorTitle];

        console.log(detailKeys);

        return `${creatorTitle}: ${creatorName}`
    }

    displayCatalog(divEl) {
        // display the items in the catalog, including the titles (italicized), publication data, value, and additional properties specific to the media type.

        const paras = divEl.getElementsByTagName('p');
        const last = divEl.getElementsByTagName('h4');
        for (let i = 0; i < paras.length; i++) {
            const para = paras[i];
            para.remove();
        }
        // last.remove();


        /* extract elements from doc */
        const logTitle = divEl.getElementsByClassName("desc");

        if (divEl == document.getElementsByTagName("div")[0]) {
            logTitle[0].innerHTML = "Catalog Items:";

        } else {
            logTitle[0].innerHTML = "Updated Catalog Items:";
        }

        for (const item in this.availableLog) {
            if (Object.hasOwnProperty.call(this.availableLog, item)) {
                const element = this.availableLog[item];

                let title = element.title;
                let value = element.value;

                let dTitleOne = Object.keys(element)[4];
                let dNameOne = element[dTitleOne];
                let dTitleTwo = Object.keys(element)[5];
                let dNameTwo = element[dTitleTwo];

                if (dTitleTwo == "Runtime") {
                    dNameTwo += ` minutes`;
                }

                let details = `${dTitleOne}: ${dNameOne}, ${dTitleTwo}: ${dNameTwo}`

                divEl.innerHTML += `<p><span>${title}</span> - $${value} (${details})</p>`;
            }
        }

        /* Display total Value */
        divEl.innerHTML +=
            `<h4 class="final">Total Value of Catalog: $${this.totalValue()}</h4>`;

        /* remove random */
        if (divEl == document.getElementsByTagName("div")[0]) {
            let choiceIndex = Math.floor(Math.random() * 4);
            let choiceID = this.availableLog[`${choiceIndex}`].id;

            this.removeItem(choiceID);
        }


    }
}

/* creating library catalog */
let libCat = new Catalog();

/* Creating catalog items */
let gone = new Book("Gone Girl", 12.94, 2012, "Gillian Flynn", "psychological thriller")
let gg = new DVD("Gone Girl", 2014, 14.99, "David Fincher", "149");
let hp = new DVD("Harry Potter", 2001, 14.99, "Chris Columbus", "152");
let ts89 = new CD("1989 (Taylor's Version)", 2023, 13.99, "Taylor Swift", 22);

libCat.addItem(ts89, hp, gg, gone);


//add title
let title = document.getElementsByTagName('h1');
title[0].innerHTML = "Library Catalog";

//display catalog items
let entireLog = document.getElementsByTagName("div");
libCat.displayCatalog(entireLog[0]);

// const button = document.createElement("button");
// button.innerHTML = "Checkout Random";
// document.body.insertBefore(button, entireLog[2])
// console.log(button);
// button.onclick = function () { libCat.removeItem() };