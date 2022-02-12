//Require Mongoose
var mongoose = require("mongoose");
var { Schema, Query } = mongoose;
const BookSchema = require("../db/book.schema");

// Compile model from schema
const BookModel = mongoose.model("books", BookSchema.bookSchema);

async function donate_book(book) {
  book.status = "available";
  const document = new BookModel(book);
  return await document.save();
}

async function list_books(searchQuery) {
  return await BookModel.find({
    "volumeInfo.title": { $regex: ".*" + searchQuery + ".*" },
  });
  // return await document.save();
}

//pass an array of book objects
async function create_bulk_books(bulkBooks) {
  return await BookModel.insertMany(bulk_data);
}

const bulk_data = [
  {
    kind: "books#volume",
    id: "8Pr_kLFxciYC",
    etag: "l7R7z3qouTg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC",
    volumeInfo: {
      title: "Flowers For Algernon",
      subtitle: "A Modern Literary Classic",
      authors: ["Daniel Keyes"],
      publisher: "Hachette UK",
      publishedDate: "2012-11-15",
      description:
        "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780575088498",
        },
        {
          type: "ISBN_10",
          identifier: "0575088494",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 224,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 5,
      ratingsCount: 4,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "0.14.17.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=8Pr_kLFxciYC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
      infoLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api",
      canonicalVolumeLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC",
    },
    status: "available",

    saleInfo: {
      country: "AU",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 9.99,
        currencyCode: "AUD",
      },
      retailPrice: {
        amount: 9.99,
        currencyCode: "AUD",
      },
      buyLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9990000,
            currencyCode: "AUD",
          },
          retailPrice: {
            amountInMicros: 9990000,
            currencyCode: "AUD",
          },
          giftable: true,
        },
      ],
    },
    accessInfo: {
      country: "AU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com.au/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone&#39;s jokes - until an experiment in the enhancement of human intelligence turns him into a genius.",
    },
  },
  {
    kind: "books#volume",
    id: "Fgn65IL3q4wC",
    etag: "hDRJAItkwcc",
    selfLink: "https://www.googleapis.com/books/v1/volumes/Fgn65IL3q4wC",
    volumeInfo: {
      title: "Flowers for Algernon",
      authors: ["Daniel Keyes"],
      publishedDate: "1972",
      readingModes: {
        text: false,
        image: false,
      },
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.1.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=Fgn65IL3q4wC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=Fgn65IL3q4wC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=Fgn65IL3q4wC&q=flowers+inauthor:keyes&dq=flowers+inauthor:keyes&hl=&cd=2&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=Fgn65IL3q4wC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=Fgn65IL3q4wC",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=Fgn65IL3q4wC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
  },
  {
    kind: "books#volume",
    id: "F1wgqlNi8AMC",
    etag: "21lGvMR+4bk",
    selfLink: "https://www.googleapis.com/books/v1/volumes/F1wgqlNi8AMC",
    volumeInfo: {
      title: "Flowers for Algernon",
      subtitle: "A Full-length Play",
      authors: ["David Rogers", "Daniel Keyes"],
      publisher: "Dramatic Publishing",
      publishedDate: "1969",
      description:
        "The compelling story of Charlie Gordon, willing victim of a strange experiment - a moron, a genius, a man in search of himself. Poignant, funny, tragic, but with a hope for the indomitable spirit of man, this unusual play tells a story you will long remember. It also offers a magnificent role.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0871295377",
        },
        {
          type: "ISBN_13",
          identifier: "9780871295378",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 117,
      printType: "BOOK",
      categories: ["American drama"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=F1wgqlNi8AMC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=3&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=F1wgqlNi8AMC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=F1wgqlNi8AMC",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=F1wgqlNi8AMC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet: "The compelling story of Charlie Gordon, willing victim of a strange experiment - a moron, a genius, a man in search of himself.",
    },
  },
  {
    kind: "books#volume",
    id: "8Pr_kLFxciYC",
    etag: "azCFkq5JCMc",
    selfLink: "https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC",
    volumeInfo: {
      title: "Flowers For Algernon",
      subtitle: "A Modern Literary Classic",
      authors: ["Daniel Keyes"],
      publisher: "Hachette UK",
      publishedDate: "2012-11-15",
      description:
        "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780575088498",
        },
        {
          type: "ISBN_10",
          identifier: "0575088494",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 224,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 5,
      ratingsCount: 4,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "0.14.17.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=8Pr_kLFxciYC&pg=PT240&dq=flowers+inauthor:keyes&hl=&cd=4&source=gbs_api",
      infoLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api",
      canonicalVolumeLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC",
    },
    saleInfo: {
      country: "AU",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 9.99,
        currencyCode: "AUD",
      },
      retailPrice: {
        amount: 9.99,
        currencyCode: "AUD",
      },
      buyLink: "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9990000,
            currencyCode: "AUD",
          },
          retailPrice: {
            amountInMicros: 9990000,
            currencyCode: "AUD",
          },
          giftable: true,
        },
      ],
    },
    accessInfo: {
      country: "AU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com.au/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "I stare inward in the center of my unseeing eye at the red spot that transforms itself into a multipetaled \u003cb\u003eflower\u003c/b\u003e – the shimmering, swirling, luminescent \u003cb\u003eflower\u003c/b\u003e that lies deep in the core of my unconscious. I am shrinking.",
    },
  },
  {
    kind: "books#volume",
    id: "gK98gXR8onwC",
    etag: "0Ga/FnY2Meg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
    volumeInfo: {
      title: "Flowers for Algernon",
      subtitle: "A One-act Play",
      authors: ["David Rogers", "Daniel Keyes"],
      publisher: "Dramatic Publishing",
      publishedDate: "1969",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0871293870",
        },
        {
          type: "ISBN_13",
          identifier: "9780871293879",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 32,
      printType: "BOOK",
      categories: ["American drama"],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=5&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "\u003cb\u003eFLOWERS\u003c/b\u003e FOR ALGERNON A One - act Play For Four Men And One Woman * CHARACTERS DR . STRAUSS a young neurosurgeon PROFESSOR NEMUR .his older colleague ALICE KINNIAN .. ... a young , dedicated teacher BURT SELDON a young laboratory&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "gK98gXR8onwC",
    etag: "S+8prPj4nAw",
    selfLink: "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
    volumeInfo: {
      title: "Flowers for Algernon",
      subtitle: "A One-act Play",
      authors: ["David Rogers", "Daniel Keyes"],
      publisher: "Dramatic Publishing",
      publishedDate: "1969",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0871293870",
        },
        {
          type: "ISBN_13",
          identifier: "9780871293879",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 32,
      printType: "BOOK",
      categories: ["American drama"],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=gK98gXR8onwC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=6&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    kind: "books#volume",
    id: "9ygPPQAACAAJ",
    etag: "c+XLMeLNr5M",
    selfLink: "https://www.googleapis.com/books/v1/volumes/9ygPPQAACAAJ",
    volumeInfo: {
      title: "Flores para Algernon",
      authors: ["Daniel Keyes"],
      publisher: "Ediciones Sm",
      publishedDate: "2004",
      description:
        'Charlie Gordon, a youth with limited mental capabilities, along with a laboratory rat named Algernon become the the joint objects of a scientific alteration to see if Charlie can become "normal."',
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "8467503483",
        },
        {
          type: "ISBN_13",
          identifier: "9788467503487",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 91,
      printType: "BOOK",
      categories: ["Comics & Graphic Novels"],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      comicsContent: true,
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=9ygPPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=9ygPPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "es",
      previewLink: "http://books.google.com.au/books?id=9ygPPQAACAAJ&dq=flowers+inauthor:keyes&hl=&cd=7&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=9ygPPQAACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flores_para_Algernon.html?hl=&id=9ygPPQAACAAJ",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=9ygPPQAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Charlie Gordon, a youth with limited mental capabilities, along with a laboratory rat named Algernon become the the joint objects of a scientific alteration to see if Charlie can become &quot;normal.&quot;",
    },
  },
  {
    kind: "books#volume",
    id: "6WrhAAAAMAAJ",
    etag: "nZxOqSgM4Fs",
    selfLink: "https://www.googleapis.com/books/v1/volumes/6WrhAAAAMAAJ",
    volumeInfo: {
      title: "Algernon, Charlie, and I",
      subtitle: 'A Writer\'s Journey : Plus the Complete Original Short Novelette Version of "Flowers for Algernon"',
      authors: ["Daniel Keyes"],
      publisher: "Challenge PressInc",
      publishedDate: "1999",
      description:
        "The author shares his creative processes, revealing the life experiences leading to the creation of Charlie Gordon and tracing the evolution of the novelette into a novel, stage production, cinema production, and TV movie.",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "UOM:39015049675906",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 223,
      printType: "BOOK",
      categories: ["Biography & Autobiography"],
      averageRating: 4,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.1.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=6WrhAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=6WrhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=6WrhAAAAMAAJ&q=flowers+inauthor:keyes&dq=flowers+inauthor:keyes&hl=&cd=8&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=6WrhAAAAMAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Algernon_Charlie_and_I.html?hl=&id=6WrhAAAAMAAJ",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=6WrhAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "The author shares his creative processes, revealing the life experiences leading to the creation of Charlie Gordon and tracing the evolution of the novelette into a novel, stage production, cinema production, and TV movie.",
    },
  },
  {
    kind: "books#volume",
    id: "KY_-oAEACAAJ",
    etag: "mrqep95C22Y",
    selfLink: "https://www.googleapis.com/books/v1/volumes/KY_-oAEACAAJ",
    volumeInfo: {
      title: "Flores Para Algernon",
      authors: ["Daniel Keyes"],
      publisher: "Turtleback Books",
      publishedDate: "2001-01-01",
      description: "Mentally handicapped Charlie Gordon participates in an experiment which turns him into a genius temporarily.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0606340181",
        },
        {
          type: "ISBN_13",
          identifier: "9780606340182",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 91,
      printType: "BOOK",
      categories: ["Juvenile Fiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=KY_-oAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=KY_-oAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "es",
      previewLink: "http://books.google.com.au/books?id=KY_-oAEACAAJ&dq=flowers+inauthor:keyes&hl=&cd=9&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=KY_-oAEACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Flores_Para_Algernon.html?hl=&id=KY_-oAEACAAJ",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=KY_-oAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet: "Mentally handicapped Charlie Gordon participates in an experiment which turns him into a genius temporarily.",
    },
  },
  {
    kind: "books#volume",
    id: "LRlCAAAAYAAJ",
    etag: "+Oye2hdDoOM",
    selfLink: "https://www.googleapis.com/books/v1/volumes/LRlCAAAAYAAJ",
    volumeInfo: {
      title: "Some Environmental Factors Influencing Bud Formation, Abscission and Flower Production of Gardenias",
      authors: ["Curtis Gilbert Keyes"],
      publishedDate: "1946",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "CORNELL:31924002987646",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 190,
      printType: "BOOK",
      categories: ["Gardenia"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.2.2.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=LRlCAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=LRlCAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink: "http://books.google.com.au/books?id=LRlCAAAAYAAJ&q=flowers+inauthor:keyes&dq=flowers+inauthor:keyes&hl=&cd=10&source=gbs_api",
      infoLink: "http://books.google.com.au/books?id=LRlCAAAAYAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
      canonicalVolumeLink: "https://books.google.com/books/about/Some_Environmental_Factors_Influencing_B.html?hl=&id=LRlCAAAAYAAJ",
    },
    saleInfo: {
      country: "AU",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "AU",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: "http://play.google.com/books/reader?id=LRlCAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Heinicze, A. J. Factors influoncing the abscission of \u003cb\u003eflower\u003c/b\u003e and partially developed fruits of tho apple (oyrus alus L.). Cornell Univ. Agr. Exp. Sta. Bul. 393, 1917. Jones, L. I. Rolation of soil temperature to chlorosis of Gardenia.",
    },
  },
];

module.exports = {
  create_bulk_books,
  donate_book,
  BookModel,
  list_books,
};
