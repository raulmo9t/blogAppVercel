import axios from "axios";

export const getAllCategories = async (
  searchKeyword = "",
  page = 1,
  limit = 10
) => {
  try {
    const { data, headers } = await axios.get(
      `https://render-blogapp-express.onrender.com/api/post-categories?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deleteCategory = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `https://render-blogapp-express.onrender.com/api/post-categories/${slug}`,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createCategory = async ({ token, title }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `https://render-blogapp-express.onrender.com/api/post-categories`,
      { title },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateCategory = async ({ token, title, slug }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `https://render-blogapp-express.onrender.com/api/post-categories/${slug}`,
      { title },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getSingleCategory = async ({ slug }) => {
  try {
    const { data } = await axios.get(
      `https://render-blogapp-express.onrender.com/api/post-categories/${slug}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
