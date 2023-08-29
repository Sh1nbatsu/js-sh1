class timeManager {
  constructor() {
    this.hours = document.getElementById("hours");
    this.minutes = document.getElementById("minutes");
    this.seconds = document.getElementById("seconds");
    this.date = new Date();
  }

  init() {
    setInterval(() => {
      this.updateHours();
      this.updateMinutes();
      this.updateSeconds();
    }, 500);
  }

  updateSeconds() {
    this.seconds.innerText = this.date.getSeconds();
    this.date = new Date();
  }

  updateMinutes() {
    this.minutes.innerText = this.date.getMinutes();
    this.date = new Date();
  }

  updateHours() {
    this.hours.innerText = this.date.getHours();
    this.date = new Date();
  }
}

const time = new timeManager();

time.init();
