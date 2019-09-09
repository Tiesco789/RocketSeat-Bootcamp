import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const authHeader = req.headers.authorization;
=======
	const authHeader = req.headers.authorization;
>>>>>>> Stashed changes
=======
	const authHeader = req.headers.authorization;
>>>>>>> Stashed changes

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

<<<<<<< Updated upstream
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
=======
		return next();
	} catch (err) {
		return res.status(401).json({ error: 'token invalid' });
	}
>>>>>>> Stashed changes
};
