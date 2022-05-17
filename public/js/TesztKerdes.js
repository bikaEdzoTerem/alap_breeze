class TesztKerdes {
    constructor(node,adat)  {
      this.node = node;
      this.adat = adat;
      this.kerdes = this.node.children(".kerdes");
      this.valasz1 = this.node.children(".valasz1");
      this.valasz2 = this.node.children().children(".valasz2");
      this.valasz3 = this.node.children().children(".valasz3");
      this.valasz4 = this.node.children().children(".valasz4");
      this.setAdat(this.adat);

      this.kivalaszt1.on("click ", () => {
        this.kattintasTrigger("kivalaszt1");
        setKek(this.kivalaszt1);
      });

      this.valasz2.on("click ", () => {
        this.kattintasTrigger("kivalaszt2");
        setKek(this.kivalaszt2);
      });

      this.valasz3.on("click ", () => {
        this.kattintasTrigger("kivalaszt3");
        setKek(this.kivalaszt3);
      });

      this.valasz4.on("click ", () => {
        this.kattintasTrigger("kivalaszt4");
        setKek(this.kivalaszt4);
      });

    }
    kattintasTrigger(esemenyneve) {
      let esemeny = new CustomEvent(esemenyneve, {
          detail: this.adat,
      });
      window.dispatchEvent(esemeny);
    }
    setAdat(adat){
      this.adat = adat;
      this.kerdes.text(adat.nev);
      this.valasz1.text(adat.nev);
      this.valasz2.text(adat.nev);
      this.valasz3.text(adat.nev);
      this.valasz4.text(adat.nev);
    }
    setKek(mit){
      mit.style.backgroundColor = 'blue';
    }
  }