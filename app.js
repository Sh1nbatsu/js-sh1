class createClock {
  constructor() {
    this.hours = document.getElementById("hours");
    this.minutes = document.getElementById("minutes");
    this.seconds = document.getElementById("seconds");
    this.date = new Date();
    this.init();
  }

  init() {
    setInterval(() => {
      this.updateHours();
      this.updateMinutes();
      this.updateSeconds();
    }, 500);
  }

  updateDate() {
    this.date = new Date();
  }

  updateSeconds() {
    this.seconds.innerText = this.date.getSeconds();
    this.updateDate()
  }

  updateMinutes() {
    this.minutes.innerText = this.date.getMinutes();
    this.updateDate()
  }

  updateHours() {
    this.hours.innerText = this.date.getHours();
    this.updateDate()
  }
}

const time = new createClock();
