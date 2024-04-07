namespace Domain
{
    public class Family
    {
        public Guid Id { get; set; }
        public List<User> Caregivers { get; set; }
        public required List<Child> Children { get; set; }
    }
}