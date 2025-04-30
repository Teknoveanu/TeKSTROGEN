# Configurarea providerului pentru Oracle Cloud  
provider "oci" {
  tenancy_ocid     = "ocid1.tenancy.oc1..aaaaaaaazzni53tl4jmjzyjq2t3jbldes3j2qf$"
  user_ocid        = "ocid1.user.oc1..aaaaaaaadevczejsd7bhmfjm3wuxh4ofj7ibs434z$"
  fingerprint      = "your_fingerprint"
  private_key_path = "/Users/antonterminescu/Documents/RadioTekka/Keys"
  region           = "eu-frankfut-1"
}
    
# Crearea unei instanțe compute
resource "oci_core_instance" "example_instance" {
  availability_domain = "lYJz:EU-FRANKFURT-1-AD-3"
  compartment_id     = "ocid1.instance.oc1.eu-frankfurt-1.antheljtd4464wqcrdvuy$"
  shape              = "VM.Standard.E2.1.Micro"
  display_name       = "Tekk-a-Tete"
    
  # Configurarea volumul de boot folosind image sau volume
  source_details {
    source_type = "image"
    source_id   = "ocid1.image.oc1.eu-frankfurt-1.aaaaaaaamc4tcw6rrtilenfwbkft5$"  # Poti folosi si o imagine predefinita
    # sau
    # source_type = "volume"
    # source_id   = oci_core_volume.boot_volume.id # Foloseste ID-ul volumului de boot, dacă ai un volum deja creat.
  }
   
  # Setările rețelei
  create_vnic_details {
    subnet_id = "ocid1.subnet.oc1.eu-frankfurt-1.aaaaaaaazl26hgrpoaram4izfakevq$"
    assign_public_ip = true
  }

  # Cheia SSH pentru autentificare
  metadata = {
    ssh_authorized_keys = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCx2z70dSbDHPdb$"
  }
}

# Crearea unui volum de boot (optional, dacă vrei un volum propriu)
resource "oci_core_volume" "boot_volume" {
  availability_domain = "lYJz:EU-FRANKFURT-1-AD-3"
  compartment_id     = "ocid1.instance.oc1.eu-frankfurt-1.antheljtd4464wqcrdvuy$"
  display_name       = "boot-volume"
  size_in_gbs        = 50
}

# Crearea unei rețele virtuale private
resource "oci_core_virtual_network" "example_vcn" {
  compartment_id = "ocid1.instance.oc1.eu-frankfurt-1.antheljtd4464wqcrdvuyr6xm$"
  cidr_block     = "10.0.0.0/16"
  display_name   = "Iisus"
}
  
# Crearea unei subrețele 
resource "oci_core_subnet" "example_subnet" {
  compartment_id   = "ocid1.instance.oc1.eu-frankfurt-1.antheljtd4464wqcrdvuyr6$"
  cidr_block       = "10.0.0.0/24"
  vcn_id           = oci_core_virtual_network.example_vcn.id
  display_name     = "iuda"
  availability_domain = "lYJz:EU-FRANKFURT-1-AD-3"
}

