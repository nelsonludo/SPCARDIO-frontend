import Cookies from "js-cookie";

export class TokenHelper {
  private VITE_JWT_PART_ONE: string;
  private VITE_JWT_PART_TWO: string;

  constructor() {
    this.VITE_JWT_PART_ONE = import.meta.env.VITE_JWT_PART_ONE || "";
    this.VITE_JWT_PART_TWO = import.meta.env.VITE_JWT_PART_TWO || "";

    if (!this.VITE_JWT_PART_ONE || !this.VITE_JWT_PART_TWO) {
      throw new Error("Provide all keys.");
    }
  }

  setToken(jwt: string) {
    const jwtArray = jwt.split(".");

    localStorage.setItem(this.VITE_JWT_PART_ONE, jwtArray[0]);
    Cookies.set(this.VITE_JWT_PART_TWO, `${jwtArray[1]}.${jwtArray[2]}`, {
      secure: true,
      sameSite: "Strict",
    });
  }

  getToken() {
    const jwt = `${localStorage.getItem(this.VITE_JWT_PART_ONE)}.${Cookies.get(this.VITE_JWT_PART_TWO)}`;
    return jwt;
  }

  deleteToken() {
    // Remove from localStorage
    localStorage.removeItem(this.VITE_JWT_PART_ONE);

    // Remove from Cookies
    Cookies.remove(this.VITE_JWT_PART_TWO);
  }
}
