using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EditorPersonalizadoComponente
{
    public class ParametrosEditor
    {
        public ParametrosEditor(string selector)
        {
            Selector = selector;
        }

        public string Selector { get; set; }

        public string Toolbar { get; set; } = "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | outdent indent";

        [JsonPropertyName("external_plugins")]
        public Dictionary<string, string> ExternalPlugins { get; set; } = new Dictionary<string, string>();
    }
}
