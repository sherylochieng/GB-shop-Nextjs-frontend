// Pagination utility functions for API responses

export function getPaginationParams(req, defaultPerPage = 10, maxPerPage = 50) {
  const perPage = Math.min(parseInt(req.query.perPage, 10) || defaultPerPage, maxPerPage);
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);

  return { perPage, page };
}

export function createPaginatedResponse(data, page, perPage) {
  return {
    data,
    pagination: {
      page,
      perPage,
      total: data.length,
    },
  };
}