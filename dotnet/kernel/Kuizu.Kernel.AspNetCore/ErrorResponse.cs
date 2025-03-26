namespace Kuizu.Kernel.AspNetCore;

public record ErrorResponse(string Instance, string TraceId, string Type, string Error, string Detail);
