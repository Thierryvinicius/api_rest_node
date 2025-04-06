import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Falha ao criar o usuário", details: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const filters = {};
    const { name, email, age } = req.query;

    if (name) filters.name = name;
    if (email) filters.email = email;
    if (age) filters.age = parseInt(age);

    const users = await prisma.user.findMany({
      where: filters,
    });

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Falha ao buscar usuários", details: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await prisma.user.update({
      where: { id },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Falha ao atualizar o usuário", details: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Falha ao deletar o usuário", details: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await prisma.user.findUnique({ where: { id } });

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Falha ao buscar o usuário", details: error.message });
  }
};
