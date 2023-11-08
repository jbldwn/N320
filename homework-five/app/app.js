
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
    removeItem() {
        let rando = Math.floor(Math.random() * this.availableLog.length);
        let rselect = this.availableLog[`${rando}`].id;

        this.availableLog = this.availableLog.filter(function (obj) {
            return obj.id !== rselect;
        })

        libCat.displayCatalog(entireLog[1]);
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

    displayCatalog(divEl) {

        /* reset second Div */
        if (divEl === document.getElementsByTagName("div")[1]) {
            let htmlCollection = document.getElementsByTagName("div")[1];
            htmlCollection.innerHTML = `<h2 class="desc"></h2>`
        }
        if (divEl != null) {
            // display the items in the catalog, including the titles (italicized), publication data, value, and additional properties specific to the media type.

            const paras = divEl.getElementsByTagName('p');

            for (let i = 0; i < paras.length; i++) {
                const para = paras[i];
                para.remove();
            }

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
        }

        /* remove random */
        if (divEl === document.getElementsByTagName("div")[0]) {
            this.removeItem();
        } else {
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

/* adding items to cataloge */
libCat.addItem(ts89, hp, gg, gone);


/* printing title */
let title = document.getElementsByTagName('h1');
title[0].innerHTML = "Library Catalog";

/* display catalog items */
let entireLog = document.getElementsByTagName("div");
libCat.displayCatalog(entireLog[0]);

/* add button to remove */
const body = document.getElementsByTagName("body")[0];
body.innerHTML += `<button>Check Out Item</button>`;
const btn = body.getElementsByTagName("button")[0];
btn.addEventListener("click", (e) => {
    libCat.removeItem();

})