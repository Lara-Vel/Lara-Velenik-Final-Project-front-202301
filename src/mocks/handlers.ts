import { rest } from 'msw';
import { adsFullFilledResponse } from './ads-mocks';

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'emailtest@gmail.com') {
        return res(
          ctx.status(201),
          ctx.json({
            msg: 'Successfully logged in! You will now be redirected...',
          }),
        );
      }

      return res(ctx.status(500), ctx.json({ msg: 'Error while logging in' }));
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads`,
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(adsFullFilledResponse));
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f4`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f4',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Azul Ruso',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Azul Ruso',
        }),
      );
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f1`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f1',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Balinés',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Balinés',
        }),
      );
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f2`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f2',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Bengalí',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Bengalí',
        }),
      );
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f3`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f3',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Bosque de Noruega',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Bosque de Noruega',
        }),
      );
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f5`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f5',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Oriental',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Oriental',
        }),
      );
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/641db6f0d1fb673e861889f6`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: '641db6f0d1fb673e861889f6',
          name: 'Lara',
          surname: 'Velenik',
          breed: 'Siberiano',
          email: 'lara@gmail.com',
          phone: '611111111',
          city: 'Sevilla',
          image: 'cat.webp',
          description: 'Soy un gato Siberiano',
        }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/api/v1/ads`, (_req, res, ctx) => {
    return res.once(ctx.status(500), ctx.json(null));
  }),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/ads/4321`,
    (_req, res, ctx) => {
      return res.once(
        ctx.status(404),
        ctx.json({ msg: 'El anuncio buscado no existe' }),
      );
    },
  ),
];
