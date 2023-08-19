// Body parts
import classes from "./HangmanDrawing.module.css";

const HEAD = <div className={classes["body-head"]}></div>;
const BODY = <div className={classes["body"]}></div>;
const RIGHT_ARM = <div className={classes["body-right-arm"]}></div>;
const LEFT_ARM = <div className={classes["body-left-arm"]}></div>;
const RIGHT_LEG = <div className={classes["body-right-leg"]}></div>;
const LEFT_LEG = <div className={classes["body-left-leg"]}></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className={classes["container"]}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={classes["stand-top"]}></div>
      <div className={classes["stand-rope"]}></div>
      <div className={classes["stand"]}></div>
      <div className={classes["stand-base"]}></div>
    </div>
  );
}
