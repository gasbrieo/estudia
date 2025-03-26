using MediatR;

namespace Kuizu.Kernel;

public interface IQuery<out TResponse> : IRequest<TResponse>;
