namespace Kuizu.Kernel;

public interface IResult
{
    ResultStatus Status { get; }
    IEnumerable<ValidationError> Errors { get; }
    object? GetValue();
    string Location { get; }
}
