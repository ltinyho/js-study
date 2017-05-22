/**
 * User: LiuZiHao/951919064@qq.com
 * Date: 2017/5/22 21:56
 * Desc: 策略模式
 */

function SA() {

}

SA.prototype.calculate = function (salary) {
  return salary * 4;
}

function SB() {

}

SB.prototype.calculate = function (salary) {
  return salary * 3;
}

function SC() {

}
SC.prototype.calculate    = function (salary) {
  return salary * 2;
}
var Bouns                 = function () {
  this.salary   = null;
  this.strategy = null;
}
Bouns.prototype.setSalary = function (salary) {
  this.salary = salary
}

Bouns.prototype.setStrategy = function (Strategy) {
  this.Strategy = Strategy;
}

Bouns.prototype.getBonus = function () {
  return this.Strategy.calculate(this.salary);
}

var bonus = new Bouns();
bonus.setSalary(1000);
bonus.setStrategy(new SA());
console.log(bonus.getBonus());

bonus.setStrategy(new SB());
bonus.setStrategy(new SC());
console.log(bonus);

var strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  }
}

var calculateBonus = function (level, salary) {
  return strategies[level](salary);
}
console.log(calculateBonus("S", 3000));


