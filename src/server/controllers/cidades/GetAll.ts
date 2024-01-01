/*
import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number | null;  // Permitir null para compatibilidade com Yup
  limit?: number | null; // Permitir null para compatibilidade com Yup
  filter?: string | null; // Permitir null para compatibilidade com Yup
}

export const getAllValidation = validation((getSchema) => ({
  body: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().moreThan(0).nullable(),  // Usar nullable() para permitir null
    limit: yup.number().nullable(), // Usar nullable() para permitir null
    filter: yup.string().nullable(), // Usar nullable() para permitir null
    nome: yup.string().notRequired().min(3),
  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};
*/
import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number(),
    filter: yup.string().optional(),
  })),
}));

export const getAll = async (req: Request<{}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};
