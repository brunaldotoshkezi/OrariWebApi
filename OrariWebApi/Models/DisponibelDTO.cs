using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrariWebApi.Models
{
    public class DisponibelDTO
    {
        public int DitaId { get; set; }
        public int OraId { get; set; }
        public int KlasaId { get; set; }
        public bool Perdorur { get; set; }
        public string Tipi { get; set; }
        public string Dita { get; set; }
        public string Klasa { get; set; }
        public string Ora { get; set; }
    }
}