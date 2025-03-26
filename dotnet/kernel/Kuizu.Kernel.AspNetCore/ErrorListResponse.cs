namespace Kuizu.Kernel.AspNetCore;

public record ErrorListResponse(string Instance, string TraceId, IEnumerable<ErrorDetail> Errors);
