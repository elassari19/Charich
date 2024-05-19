import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (password) => {
	const salt = bcrypt.genSaltSync(saltRounds);
	return bcrypt.hashSync(password, salt);
};

export const comparePassword = (plain, hashed) =>
	bcrypt.compareSync(plain, hashed);

export const createToken = (id, expier) => {
  
  return jwt.sign({ user_id: id },
    process.env.JWT_SECRET,
    {
      expiresIn: expier,
  });
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}
