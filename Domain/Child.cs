namespace Domain
{
    public class Child
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Sex Sex { get; set; }
     }

    public enum Sex
    {
        Male,
        Female
    }


}