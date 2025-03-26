using MediatR;

namespace Kuizu.Kernel;

public interface ICommand<out TResponse> : IRequest<TResponse>;
