using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Catalog
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler(DataContext context) : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context = context;

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}