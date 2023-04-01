import Float "mo:base/Float";

actor CALCULATOR {

  //declare and initialize a variable counter of type Float
  var counter : Float = 0.0;

  //add the number from user to the counter
  public func add(num : Float) : async Float {
    counter += num;
    return counter;
  };

  //subtract the imput number from the counter
  public func sub(num : Float) : async Float {
    counter -= num;
    return counter;
  };

  //multiply the input number by the counter
  public func mul(num : Float) : async Float {
    counter *= num;
    return counter;

  };

  //div the input number by the counter
  public func div(num : Float) : async ?Float {
    if (num == 0) {
      null;
    } else {
      counter /= num;
      return ?counter;
    };
  };

  //square root the input number by the counter
  public func sqrt() : async Float {
    counter **= 1 / 2;
    return counter;

  };

  //power the input number by the counter
  public func pow(num : Float) : async Float {
    counter **= num;
    return counter;

  };

  //floor the input number by the counter
  public func floor() : async Int {
    counter := Float.floor(counter);
    return Float.toInt(counter);

  };

  //reset the input number by the counter
  public func reset() : async () {
    counter := 0.0;
  };

  //see the input number by the counter
  public query func see() : async Float{
    return counter;
  };

};
